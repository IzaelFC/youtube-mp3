async function index(){
    var youtube_url = document.getElementById('url').value
    var id = youtube_url.split("watch?v=")[1]

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1416096088msh86a6640bb6d0c05p10d924jsn6727f6d3e179',
            'X-RapidAPI-Host': 'youtube-mp3-download1.p.rapidapi.com'
        }
    };

    var link = await (await fetch(`https://youtube-mp3-download1.p.rapidapi.com/dl?id=${id}`, options)).json()

    document.getElementById('link').innerHTML = `<a href="${link['link']}" target="_blank">Download</a>`
}