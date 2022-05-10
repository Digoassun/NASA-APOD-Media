$('#showup').hide()

$('#foguete').click(function () {
    $('#showup').fadeIn(2000)
    $("#initialSec").fadeOut(1000)

})

$('#apodVideo').hide();

const apodVideo = $("#apodVideo")
const apodImg = $("#apodImg")

$("#btnInput").click(function () {
    const date = $('#inputDate').val()
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=qQll8YHtQi7NtYVK3hkf4Qy6mYY4pIM45mBJNN7z&date=${date}`,
        type: "GET",
        success: function (data) {
            $("h3").text(data.title);
            if (data.media_type == 'image' || data.media_type == 'gif') {
                apodImg.attr("src", data.url).css("display", "flex")
                apodVideo.css("display", "none")
            } else if (data.media_type == 'video') {
                apodVideo.attr("src", data.url).css("display", "flex")
                apodImg.css("display", "none")
            }
            $("#description").text(data.explanation)
            if (data.copyright != null) {
                $("#copyright").css("display","flex")
                $("#copyright").text(`Descrição de ${data.copyright}`)
            } else if (data.copyright == null) {
                $("#copyright").css("display","none")
            }
        }
    })
})

$("#buttonDay").click(function (e) {
    e.preventDefault()
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=qQll8YHtQi7NtYVK3hkf4Qy6mYY4pIM45mBJNN7z
        `,
        type: "GET",
        success: function (data) {
            $("h3").text(data.title);
            if (data.media_type == 'image' || data.media_type == 'gif') {
                apodImg.attr("src", data.url).css("display", "flex")
                apodVideo.css("display", "none")
            } else if (data.media_type == 'video') {
                apodVideo.attr("src", data.url).css("display", "flex")
                apodImg.css("display", "none")
            }
            $("#description").text(data.explanation)
            if (data.copyright != null) {
                $("#copyright").css("display","flex")
                $("#copyright").text(`Descrição de ${data.copyright}`)
            } else if (data.copyright == null) {
                $("#copyright").css("display","none")
            }
        }
    })
})