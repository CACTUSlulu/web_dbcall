


$(document).ready(function () {


    $('#trigger').click( function () {
        $("#creation_doc").attr("style","display:block;");
      })

      $('#close').click( function () {
        $("#creation_doc").attr("style","display:none;");
      })

      $('#annuler').click( function () {
        $("#creation_doc").attr("style","display:none;");
      })



    $.ajax({
        //L'URL de la requête 
        url: "https://api.app-qhse.fr/v2/documents/enterprise",

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

            $.each(response.data, function (index, value) {

                let data = response;
                doc = value;

                /* Documents */

                const tags= value.tags
                const iconLink = "<svg viewBox=\"64 64 896 896\" focusable=\"false\" data-icon=\"link\" width=\"1em\" height=\"1em\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z\"></path></svg>"

                $('#docdomaine').append("<tr><td class='styleTd'>" + value.domain + "</td></tr>")
                $('#doctitre').append("<tr><td class='styleTd'>" + value.title + "</td></tr>")
                $('#doclien').append("<tr><td class='styleTd'><a href='" + value.url +"'>"+ iconLink +"  Consulter</a></td></tr>")
                $('#doctags').append("<tr><td class='styleTd'>" + tags.map(tag => "<span class=\'badge bg-info fs-6\'>" + tag + "</span>") + "</td></tr>")


                /*  $('#').append("<tr><td class='styleTd'>"+value.designation+"</td><td class='styleTd'>"+value.id+"</td> </tr>") */


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
