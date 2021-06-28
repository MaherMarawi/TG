$(document).ready(function(){
    $(document).on('mouseenter','.imgClass',function(e){
        $(e.target).animate({
            width:'300px',
            height:'180px',
        })
        $('#theader').css('color',"rgb("+e.offsetX+","+e.offsetY+", 30)")
    })
    $(document).on('mouseout','.imgClass',function(e){
        $(e.target).animate({
            width:'200px',
            height:'120px',
        })
        $('#theader').css('color',"rgb(63, 52, 39)")
    })
    $('#button1').on('click',function(){
        $('#gifs').empty();
        var search = $('#name').val() ;
        var lmt = $('#lmt').val() ;
        if (lmt > 50) {
            lmt = 50;
        }
        if (search != '' && lmt != 0) {
            let url = `https://api.tenor.com/v1/search?q=${search}&key=D4SHK5J6H1FQ&limit=${lmt}`
            getGifs(url)
                .then(data => renderData(data))
                .catch(err => renderError(err));
        }else{
            $('#gifs').append('<h4 class="display-4">You have to fill all fields</h4>');
        }
    })
    function getGifs(url) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url , true);
            xhr.onprogress = function(){
                $('#load').append('<h1>loading...</h1>');
            }
            xhr.onload = function(){
                if (this.status == 200) {
                    resolve(xhr.response)
                }else{
                    reject(new err(xhr.status))
                }
            }
            xhr.send();
        })
    }
    function renderData(data) {
        let newData = JSON.parse(data)
        var top_10_gifs = newData["results"];
        $('#load').empty();
        if (top_10_gifs.length > 0) {
            for (let i in top_10_gifs ) {
                var img = $('<img class="imgClass">');
                img.attr('src',top_10_gifs [i]["media"][0]["nanogif"]["url"]);
                $('#gifs').append(img);
                }
        }else{
            $('#gifs').append('<h4 class="display-4">No results ... Try another thing</h4>');
        }
    }
    function renderError(err) {
        console.log(err.message)
    }
})


    

