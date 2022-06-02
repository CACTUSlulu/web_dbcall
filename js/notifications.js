


$(document).ready(function () {


    $('#trigger').click( function () {
        $("#creation_notif").attr("style","display:block;");
      })

      $('#close').click( function () {
        $("#creation_notif").attr("style","display:none;");
      })

      $('#annuler').click( function () {
        $("#creation_notif").attr("style","display:none;");
      })



    $.ajax({
        //L'URL de la requête 
        url: "https://api.app-qhse.fr/v2/regions",

        //La méthode d'envoi (type de requête)
        method: "GET",

        headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTY2LCJlbWFpbCI6InN0ZXZlLmpvYnNAYXBwLXFoc2UuZnIiLCJpc1JlZmVyZW50Ijp0cnVlLCJpc0RpcmVjdG9yIjpmYWxzZSwiaXNFeHBlcnQiOmZhbHNlLCJpc0FkbWluIjp0cnVlLCJpc1N1cGVyRXhwZXJ0IjpmYWxzZSwiZG9tYWlucyI6WzddLCJhZ2VuY3kiOjEwMCwicmVnaW9uIjoiRDAwIiwiZW50ZXJwcmlzZSI6NiwiaWF0IjoxNjQwMDM3OTg1LCJleHAiOjMzMTE2MTE5NzAsImF1ZCI6Imh0dHBzOi8vYXBpMi1oc2UuZGJjYWxsLmZyIiwiaXNzIjoiaHR0cHM6Ly9hcGktaHNlMi5kYmNhbGwuZnIifQ.3NZK1he9yL_vFTGMDJ4F7RG_FP6KYFAnPcbTKWVRU0M','Content-Type': 'application/json'},

        //Le format de réponse attendu
        dataType: "json",
    })
        //Ce code sera exécuté en cas de succès - La réponse du serveur est passée à done()
        /*On peut par exemple convertir cette réponse en chaine JSON et insérer
         * cette chaine dans un div id="res"*/
        .done(function (response) {
            console.log(response.data)
            $.each(response.data, function (index, value) {

                /* console.log(value)
                let data = response;
                regions = value;
                console.log(value) */
                /* notification */

                /* $('#').append("<tr><td>" + value.code + "</td></tr>")
                $('#').append("<tr><td>" + value.name + "</td></tr>")
                $('#').append("<tr><td>" + value.enterprise.name + "</td></tr>") */
                /*  $('#').append("<tr><td>"+value.designation+"</td><td>"+value.id+"</td> </tr>") */

                console.log(value.designation)

            });

        })

        //Ce code sera exécuté en cas d'échec - L'erreur est passée à fail()
        //On peut afficher les informations relatives à la requête et à l'erreur
        .fail(function (error) {
            alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
        })

        //Ce code sera exécuté que la requête soit un succès ou un échec
        .always(function () {
            /* alert("Requête effectuée"); */
        });

});