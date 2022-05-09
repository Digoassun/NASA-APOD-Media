$('#showup').hide()

$('#foguete').click(function () {
        $('#showup').fadeIn(2000)
    })

$('#apodVideo').hide();
    
$("#btnInput").click(function () {
    var date = $('#inputDate').val()
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=qQll8YHtQi7NtYVK3hkf4Qy6mYY4pIM45mBJNN7z&date=${date}`,
        type: "GET",
        success: function (data) {
            $("h3").text(data.title);
            if (data.media_type == 'image' || data.media_type == 'gif' ) {
                $("#apodVideo").remove()
                $("#apodImg").attr("src", data.url)
            } else if (data.media_type == 'video') {
                $("#apodVideo").attr("src", data.url).show()
            }
            $("#description").text(data.explanation)
        }
    })
})

$("#buttonDay").click(function () {
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=qQll8YHtQi7NtYVK3hkf4Qy6mYY4pIM45mBJNN7z
        `,
        type: "GET",
        success: function (data) {
            $("h3").text(data.title);
            if (data.media_type == 'image' || data.media_type == 'gif' ) {
                $("#apodVideo").remove()
                $("#apodImg").attr("src", data.url)
            } else if (data.media_type == 'video') {
                $("#apodVideo").attr("src", data.url).show()
            }          
            $("#description").text(data.explanation)
        }
    })
})
