/** Contenus page /devis — mêmes patterns que l’index expertises (grilles, FAQ, JSON-LD). */

export const DEVIS_INFO_GROUPS = [
  {
    id: 'lecture',
    title: 'Comment j’utilise ce que vous m’écrivez',
    description:
      'Je ne fais pas de devis “catalogue” à l’aveugle : chaque retour s’appuie sur le contexte que vous donnez ici. Mieux vaut cinq phrases utiles qu’un cahier des charges irréaliste copié-collé d’outils d’IA.',
    items: [
      {
        title: 'Métier et enjeu',
        body: 'Qui en bénéficie, quel problème ça règle aujourd’hui, et comment vous jugez le succès (trafic, revenu, charge admin, retards évités…). Même en une phrase, ça oriente la discussion.',
      },
      {
        title: 'Délais et impératifs',
        body: 'Lancement de campagne, fin d’exercice, reprise d’un outil en panne, migration avant une obsolescence. Les dates serrées ne sont pas un drame : elles aident à dire non tout de suite plutôt qu’après trois allers-retours inutiles.',
      },
      {
        title: 'Existant et interlocuteurs',
        body: 'Stack actuelle, hébergeur, d’éventuels partenaires déjà en place, contraintes légales (RGPD, hébergeur FR) ou techniques (API, SSO). Tout ce que vous avez documenté, même sommairement, accélère la relecture.',
      },
      {
        title: 'Indicateur d’enveloppe',
        body: 'Le budget que vous cochez n’engage pas le centime : il sert à situer l’ordre de grandeur. Si l’intention n’est pas claire, je le dis et on voit s’il faut un atelier court avant un vrai devis chiffré.',
      },
    ],
  },
  {
    id: 'suivi',
    title: 'Après l’envoi, concrètement',
    description:
      'Aucun engagement du simple fait de remplir le formulaire. Mon objectif est de vous donner assez d’éléments pour trancher : travailler avec moi, ajuster l’idée, ou chercher ailleurs.',
    items: [
      {
        title: 'Délai de relecture',
        body: 'Dans la plupart des cas, retour personnalisé sous 24 à 48 h ouvrées (parfois un peu plus en période de forte charge, auquel cas je l’indique dès le mail de confirmation si le système le permet).',
      },
      {
        title: 'Contenu du retour',
        body: 'Souvent : pistes d’étagement (MVP, phases), risques avoués, questions ouvertes et, quand c’est possible, un ordre de grandeur ou une fourchette — pas une offre ferme sur la base d’une case à cocher seule.',
      },
      {
        title: 'Poursuite',
        body: 'Si on s’aligne, on fixe en général un appel d’une trentaine de minutes pour cadrer livrables, planning et facturation, puis proposition écrite. Rien d’imposé : vous restez libre d’arrêter avant signature.',
      },
    ],
  },
] as const;

export const DEVIS_FAQ = [
  {
    question: 'L’e-mail reçu — est-ce vraiment lu par une personne ?',
    answer:
      'Oui, je lis personnellement chaque message qui arrive par ce formulaire. Les champs “anti-robot” et l’e-mail d’arrivée servent à filtrer le bruit, pas à déléguer la lecture à un chatbot. Si le message est incomplètement rempli, je le signale et on peut compléter par échange court.',
  },
  {
    question: 'Faut-il un cahier des charges avant de cliquer sur “Envoyer” ?',
    answer:
      'Non. Un cadrage déjà rédigé aide, mais l’essentiel est ici : type de besoin, contrainte de temps, contexte, et le corps du message où vous dites vraiment ce que vous voulez. Si gros sujet, on itère : premier échange pour structurer, puis devis chiffré quand on a assez d’éléments.',
  },
  {
    question: 'Puis-je exiger le secret absolu (NDA) avant toute fuite de nom ou de marché ?',
    answer:
      'Pour les B2B sensibles, c’est classique. Mentionnez-le dans le message : je m’adapte (projet anonymisé, NDA bicom ou votre modèle) avant de citer le secteur ailleurs ou de parler d’un concurrent. Dites aussi si l’e-mail d’équipe doit exclure certaines adresses.',
  },
  {
    question: 'Que se passe-t-il si le besoin n’est pas mon cœur de métier ?',
    answer:
      'Je le dis franchement : parfois la bonne réponse est de vous rediriger vers un profil (freelance spécialisé, agence, WYSIWYG seulement) ou d’en rester à un call de cadrage payant. Le formulaire sert justement à éviter de vous faire perdre du temps côté vente si ce n’est pas le bon match.',
  },
] as const;
