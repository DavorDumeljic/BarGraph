var Bar = function () {
    var chart;

    var private = {
        OnPageLoad: function () {

            $("#table").hide();

            $("#btnTable").on("click", function () {
                $("#table").show();
                $("#chart").hide();
            });

            $("#btnChart").on("click", function () {
                $("#chart").show();
                $("#table").hide();
                chart.render();
            });

            $("#btnRefresh").on("click", function () {
                private.LoadData(false);
            });
            
            private.LoadData(false);
        },

        RefreshData: function () {
            window.setInterval(function () {
                private.LoadData(true);
            }, 10000);
        },

        LoadData: function (random) {

            var url = $("#getDataUrl").val();

            $.ajax({
                url: url,
                type: "POST",
                data: { randomized: random},
                success: function (response) {
                    if (!response.HasErrors) {

                        var jsonData= $.parseJSON(response.data);

                        //Render table
                        private.CreateTable(jsonData);

                        //Create chart
                        private.CreateChart(jsonData);                        

                    } else {
                        $("#table").html("<p>" + response + "</p>");
                    }
                },
                error: function (er) {
                    $("#table").html("<p>" + er + "</p>");
                }

            });
        },

        CreateTable: function (data) {
            var table = '';

            $.each(data, function (i) {
                table += "<div class='col-md-12 table-row'>";
                table += "<div class='col-md-4 table-cell'>" + data[i].Name + "</div>";
                table += "<div class='col-md-4 table-cell " + data[i].Color.toLowerCase() + "'>" + data[i].Color + "</div>";
                table += "<div class='col-md-4 table-cell'>" + data[i].Size + "</div>";
                table += "</div>";
            });
            if ($('.table .table-row').length) {
                $('.table .table-row').remove();
            }
            $('#table').append(table);
        },

        CreateChart: function (data) {
            var chartData = private.PrepareDataForChart(data);
            chart = new CanvasJS.Chart("chartContainer",
                {
                    data: [
                        {
                            type: "bar",
                            dataPoints: chartData
                        }
                    ]
                });

            chart.render();
        },

        PrepareDataForChart: function (data) {

            var chartCollection = [];
            $.each(data, function (i) {
                chartCollection.push({
                    y: data[i].Size,
                    label: data[i].Name + ' (' + data[i].Color + ')'
                });
            });
            
            return chartCollection;
        }
    };

    var public = {

        Init: function () {
            private.OnPageLoad();
            private.RefreshData();
        }
    };
    return public;
}();

$(document).ready(function () {
    Bar.Init();
});
