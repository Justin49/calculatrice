// On récupère toutes les touches dans une variable, pour la transformer en tableau on utilise le spread operator [...]
const touches = [...document.querySelectorAll('.button')];
// On récupère les keyscode de toutes les touches avec map
const listeKeycode = touches.map(touche => touche.dataset.key);
// On récupère la div écran du DOM
const ecran = document.querySelector('.ecran');

// On créer un écouteur d'évènement sur les touches du clavier, on lui associe un évènement qui nous permettera d'utiliser les keycode
document.addEventListener('keydown', (e) => {

    // On récupère la valeur pour accéder au keycode, on converti la valeur en chaîne de caractère car au départ dans notre tableau de keycode on à des chaîne de caractère
    const valeur = e.keyCode.toString();
    // On appelle la fonction calculer
    calculer(valeur)
    
});

// On créer un écouteur d'évènement au clique des touches sur la calculatrice
document.addEventListener('click', (e) => {

    const valeur = e.target.dataset.key;
    // ici aussi
    calculer(valeur);
    
});

// Création d'une fonction calculer, avec en paramètre la valeur du keycode que l'on aura récupérer grâce aux évènements au-dessus
const calculer = (valeur) => {

    // On vérifie si la valeur du keycode passer en paramètre de la fonction est inclu dans la liste de keycode, si il est inclu on fera quelque chose
    if(listeKeycode.includes(valeur)) {

        switch(valeur) {
            // Cas particulier pour le = et le C
            // Touche retour
            case '8':
                // On efface le contenu de l'écran
                ecran.textContent = "";
                break;
                // Touche entrée
            case '13':
                // On créer une variable calcul qui va évaluer le contenu de l'écran, fonction JS eval() qui va prendre en paramètre du contenu et renvoyer le résultat du contenu, on évalue ce qu'il y a dans l'écran au moment ou l'on appuis sur la touche entrée
                const calcul = eval(ecran.textContent);
                // On affiche à l'écran le résultat de ce calcul
                ecran.textContent = calcul;
                break;
                // Cas par default, pour les autres touches on les affiches à l'écran
                default:
                // Sa va regarder le keycode en paramètre, prendre le tableau listeKeycode et regarder l'index de cette valeur la qu'on va pouvoir réutiliser dans le tableau pour pouvoir récupérer la touche sur laquel on a appuyer
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                // On affiche le contenu de la touche sur laquel on a appuyer += touche.innerHTML sert à afficher la touche dans l'écran
                ecran.textContent += touche.innerHTML;
        }
    }

}


