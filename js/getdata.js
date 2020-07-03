        const ajax1 = $.ajax({
        url           : "https://api.kawalcorona.com/indonesia/",
        method        : "GET",
        success     : (indonesia) => {
            $("#positif").html(indonesia[0].positif);
            $("#meninggal").html(indonesia[0].meninggal);
            $("#sembuh").html(indonesia[0].sembuh);
        }
    });

    const ajax2 = $.ajax({
        url       : "https://api.kawalcorona.com/positif/",
        method    : "GET",
        success   : (global) => {
            $("#total").html(global.value);
        }
    });

    const ajax3 = $.ajax({
        url        : "https://api.kawalcorona.com/indonesia/provinsi/",
        dataType  : "JSON",
        method     : "GET",
        success    : (provinsi) => {

            for(var i=0; i < provinsi.length; i++){
                var html = "<tr><td>" + (i+1) + "</td><td>" + provinsi[i].attributes["Provinsi"] + "</td><td>" + provinsi[i].attributes["Kasus_Semb"] + "</td>><td>" + provinsi[i].attributes["Kasus_Posi"] + "</td>><td>" + provinsi[i].attributes["Kasus_Meni"] + "</td></tr>"
                        
                $('#table').append(html);
            }

            }
        })