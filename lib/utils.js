require('isomorphic-fetch');


function getPublicPosts() {
    return fetch(`http://localhost:8080/api/public/`).then(function(resp) {
        return resp.json();
    });
}

//function InsertDraft(){

//}
  
function handleError(error) {
    console.warn(error);
    return null;
}

module.exports = {
    getPublicPosts: function() {
        return getPublicPosts().catch(handleError);
    }

};

