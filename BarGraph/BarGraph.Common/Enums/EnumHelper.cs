﻿using System;
using System.ComponentModel;

namespace BarGraph.Common.Enums
{
    public class EnumHelper
    {
        public static string GetDescription(Enum value)
        {
            var fi = value.GetType().GetField(value.ToString());
            var attributes = (DescriptionAttribute[])fi.GetCustomAttributes(typeof(DescriptionAttribute), false);
            return attributes.Length > 0
                       ? attributes[0].Description
                       : value.ToString();
        }
    }
}
