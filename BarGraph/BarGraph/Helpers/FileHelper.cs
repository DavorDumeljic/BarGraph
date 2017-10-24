using System;
using System.Collections.Generic;
using System.IO;
using System.Text.RegularExpressions;
using System.Web;
using BarGraph.BO.Domain;
using BarGraph.Common.Enums;

namespace BarGraph.Web.Helpers
{
    public class FileHelper
    {
        public static List<BarModel> ValidateAndMapFileToModel(HttpPostedFileBase file, out Definitions.StatusMessage status)
        {
            Regex fileRowRegexPattern = new Regex(@"^\#[a-zA-Z0-9]+\:[a-zA-Z]*\:(\d)*$");
            List<BarModel> model = new List<BarModel>();
            status = Definitions.StatusMessage.Ok;

            try
            {
                using (StreamReader reader = new StreamReader(file.InputStream))
                {
                    while (!reader.EndOfStream)
                    {
                        string dataLine = reader.ReadLine();
                        if (dataLine != null && fileRowRegexPattern.IsMatch(dataLine))
                        {
                            string[] data = dataLine.Split(':');
                            model.Add(new BarModel
                            {
                                Name = data[0].Substring(1),
                                Color = data[1],
                                Size = Int32.Parse(data[2])
                            });
                        }
                        else
                        {
                            status = Definitions.StatusMessage.FileIsNotValid;
                        }
                    }
                }
            }
            catch
            {
                status = Definitions.StatusMessage.RenderFileError;
            }

            return model;
        }
    }
}