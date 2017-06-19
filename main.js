console.log("works");

function deletepost(idd)
{
    $.ajax({
        type: 'POST',
        url: '/delete/' + idd,
        success: function(r){
            var url = window.location.href.split("/")
            window.location = "http://" + url[url.length-3] + "/"
        }
    }
    
    )
}