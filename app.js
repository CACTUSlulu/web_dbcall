


 $(document).ready(function(){
    $.ajax({
        //L'URL de la requête 
        url: "https://api.app-qhse.fr/v2/users/me",

        //La méthode d'envoi (type de requête)
        method: "GET",

        headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTUyLCJlbWFpbCI6ImFsZXguZnJlbWF1eEBkYmNhbGwuZnIiLCJpc1JlZmVyZW50Ijp0cnVlLCJpc0RpcmVjdG9yIjp0cnVlLCJpc0V4cGVydCI6dHJ1ZSwiaXNBZG1pbiI6dHJ1ZSwiaXNTdXBlckV4cGVydCI6dHJ1ZSwiZG9tYWlucyI6WzNdLCJhZ2VuY3kiOjEwMCwicmVnaW9uIjoiRDAwIiwiZW50ZXJwcmlzZSI6NiwiaWF0IjoxNjUzNDY2MDQyLCJleHAiOjMzMzg0NjgwODQsImF1ZCI6Imh0dHBzOi8vYXBpMi1oc2UuZGJjYWxsLmZyIiwiaXNzIjoiaHR0cHM6Ly9hcGktaHNlMi5kYmNhbGwuZnIifQ.nVU-WhtTwIQpse_2nPIrIxdBjPHzSGnOM4qD0u70zBo','Content-Type' : 'application/json' },

        //Le format de réponse attendu
        dataType : "json",
    })
    //Ce code sera exécuté en cas de succès - La réponse du serveur est passée à done()
    /*On peut par exemple convertir cette réponse en chaine JSON et insérer
     * cette chaine dans un div id="res"*/
    .done(function(response){
        console.log(response.data)
        //let data = JSON.stringify(response);
        let data = response;
        region=data;
        var numRegion=region.data.agency.operationArea;
        var numeroRegional='numero de region: '+numRegion[0]+' '+numRegion[1];
        $('#numeroregion').text(numeroRegional);
        $('#name').text(data.data.agency.region.name);

    })

    //Ce code sera exécuté en cas d'échec - L'erreur est passée à fail()
    //On peut afficher les informations relatives à la requête et à l'erreur
    .fail(function(error){
        alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
    })

    //Ce code sera exécuté que la requête soit un succès ou un échec
    .always(function(){
        alert("Requête effectuée");
    });
});