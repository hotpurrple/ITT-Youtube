//you tube logo
export const logo = "../assets/images/logo.png";

//array categories for the sidebar
export const categoriesForCategoriesBar = [
  { name: "Brichka" },
  { name: "Home improvement" },
  { name: "Cars" },
  { name: "DIY" },
  { name: "Music" },
  { name: "Repairs" },
  { name: "ITtalents" },
  { name: "Чалга" },
  { name: "Education" },
  { name: "Podcast" },
  { name: "Movies" },
  { name: "Gaming" },
  { name: "Live" },
  { name: "Sport" },
  { name: "Fashion" },
  { name: "Beauty" },
  { name: "Comedy" },
  { name: "Gym" },
  { name: "Crypto" },
];

//за да има какво да покажем, ако не успеем да fetch-нем правилно някое видео или канал
export const demoThumbnailUrl =
  "https://i.ytimg.com/vi/_3tMxunybd8/hqdefault.jpg";
export const demoChannelUrl = "/channel/UCBi2mrWuNuyYy4gbM6fU18Q";
export const demoVideoUrl = "/video/_3tMxunybd8";
export const demoChannelTitle = "ABC News";
export const demoVideoTitle =
  "New Russian attacks hit Zaporizhzhia and other parts of Ukraine";
export const demoProfilePicture =
  "https://yt3.ggpht.com/Iv4QbKjK63MB70UvQ22FnTWF8KN3-2qZ2FqeFDiI-HVmidR7GJKo6UrVSwR6vsyHvmdm1pfirrg=s88-c-k-c0x00ffffff-no-rj";

//demo response with 20 videos, за да не изхабим дневните заявки към API-то - трябва да се закоментира първия useEffect() във feed компонента, и да се откоментира втория useEffect()
export const demoVideosResponse = [
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "oMR0E1Yijvs",
    },
    snippet: {
      publishedAt: "2022-10-13T12:03:48Z",
      channelId: "UCupvZG-5ko_eiXAupbDfxWw",
      title: "Video reveals a major problem for new Russian soldiers",
      description:
        "In a new video posted to social media, newly mobilized Russian soldiers are complaining about their lack of training before being ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/oMR0E1Yijvs/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/oMR0E1Yijvs/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/oMR0E1Yijvs/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "CNN",
      liveBroadcastContent: "none",
      publishTime: "2022-10-13T12:03:48Z",
    },
  },

  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "_3tMxunybd8",
    },
    snippet: {
      publishedAt: "2022-10-13T01:03:04Z",
      channelId: "UCBi2mrWuNuyYy4gbM6fU18Q",
      title: "New Russian attacks hit Zaporizhzhia and other parts of Ukraine",
      description:
        "New Russian attacks hit Ukraine, with the U.S. State Department confirming another American citizen has been killed fighting for ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/_3tMxunybd8/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/_3tMxunybd8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/_3tMxunybd8/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "ABC News",
      liveBroadcastContent: "none",
      publishTime: "2022-10-13T01:03:04Z",
    },
  },

  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "zmeRiOBmpok",
    },
    snippet: {
      publishedAt: "2022-10-13T13:00:42Z",
      channelId: "UCvSXMi2LebwJEM1s4bz5IBA",
      title:
        "Michael Burry&#39;s Worrying Recession Warning (The White-Collar Crisis Begins)",
      description:
        "We all know that Michael Burry (of The Big Short) has been predicting a big stock market crash and high inflation in 2022. And so ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/zmeRiOBmpok/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/zmeRiOBmpok/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/zmeRiOBmpok/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "New Money",
      liveBroadcastContent: "none",
      publishTime: "2022-10-13T13:00:42Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "3bas9gmZgps",
    },
    snippet: {
      publishedAt: "2022-10-13T08:06:43Z",
      channelId: "UCorruoVYwGGyND4SZVtrVDQ",
      title:
        "Flood Warnings: New South Wales, Victoria And Tasmania Brace For More Wild Weather",
      description:
        "Emergency warnings have been issued across New South Wales, Victoria and Tasmania, with thousands ordered to leave their ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/3bas9gmZgps/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/3bas9gmZgps/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/3bas9gmZgps/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Project",
      liveBroadcastContent: "none",
      publishTime: "2022-10-13T08:06:43Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "HZsSt_-EzvA",
    },
    snippet: {
      publishedAt: "2022-10-12T23:41:05Z",
      channelId: "UC9qr4fem8L5HEx0IDoktEpw",
      title:
        "2022 New Songs ( Latest English Songs 2022 ) 🥒 Pop Music 2022 New Song 🥒 New Popular Songs 2022",
      description:
        "2022 New Songs ( Latest English Songs 2022 ) Pop Music 2022 New Song New Popular Songs 2022 Welcome to Pop ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/HZsSt_-EzvA/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/HZsSt_-EzvA/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/HZsSt_-EzvA/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Pop Internacionais",
      liveBroadcastContent: "none",
      publishTime: "2022-10-12T23:41:05Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "fyFz2BNtm-Q",
    },
    snippet: {
      publishedAt: "2022-10-12T07:05:45Z",
      channelId: "UCUhFaUpnq31m6TNX2VKVSVA",
      title: "New BMW M2: The greatest BMW?!",
      description:
        "Say hello to the all-new BMW M2! This is our first look at BMW's new mini M4, and it's time to find out if it was worth the wait!",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/fyFz2BNtm-Q/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/fyFz2BNtm-Q/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/fyFz2BNtm-Q/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "carwow",
      liveBroadcastContent: "none",
      publishTime: "2022-10-12T07:05:45Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "M_fxrnIKdaU",
    },
    snippet: {
      publishedAt: "2022-10-13T04:30:05Z",
      channelId: "UCod_t2sXD_gRI11yFFGkoXg",
      title:
        "New Funny Videos 2022 😂 Cutest People Doing Funny Things 😺😍 #29",
      description:
        "Hi my friends, please check our new compilation. Here is moments people funny videos and we hope that this video make your ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/M_fxrnIKdaU/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/M_fxrnIKdaU/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/M_fxrnIKdaU/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Vines best fun",
      liveBroadcastContent: "none",
      publishTime: "2022-10-13T04:30:05Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "Sq_2TxQ8zLQ",
    },
    snippet: {
      publishedAt: "2022-10-13T08:02:00Z",
      channelId: "UCt3mMVAyGhwQb_ZBGp_p85g",
      title:
        "GTA 5 : Franklin Gifting New Super RC Toy Cars To Shinchan Pinchan &amp; Chop In GTA 5 ! (GTA 5 Mods)",
      description:
        "YOU ARE WATCHING FLIGHT GAMER GTA 5 : Franklin Gifting New Super RC Toy Cars To Shinchan Pinchan & Chop In GTA 5 !",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Sq_2TxQ8zLQ/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/Sq_2TxQ8zLQ/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/Sq_2TxQ8zLQ/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Flight Gamer",
      liveBroadcastContent: "none",
      publishTime: "2022-10-13T08:02:00Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "a9-7uJWlE-o",
    },
    snippet: {
      publishedAt: "2022-10-13T08:53:48Z",
      channelId: "UCUPD0jQo-EP0B1Nf4uzeIMA",
      title: "Ep 578 | Marimayam | Is the new generation addicted to drugs . ?",
      description:
        "MazhavilManorama #Marimayam #manoramaMAX ▻ Subscribe Now: https://bit.ly/2UsOmyA Are the police or parents ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/a9-7uJWlE-o/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/a9-7uJWlE-o/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/a9-7uJWlE-o/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Mazhavil Manorama",
      liveBroadcastContent: "none",
      publishTime: "2022-10-13T08:53:48Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "LgZSMPr5T-c",
    },
    snippet: {
      publishedAt: "2022-10-13T10:47:14Z",
      channelId: "UCbB2OesCr2zlYfr4ijv0zBQ",
      title:
        "hindi new song 💖 latest bollywood songs 💖arijit singh,atif aslam,jubin nautiyal,neha kakkar 💖",
      description:
        "hindi new song latest bollywood songs arijit singh,atif aslam,jubin nautiyal,neha kakkar #bollywoodsongs ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/LgZSMPr5T-c/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/LgZSMPr5T-c/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/LgZSMPr5T-c/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Hindi Romantic Songs",
      liveBroadcastContent: "none",
      publishTime: "2022-10-13T10:47:14Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "J5KhGJ7qxow",
    },
    snippet: {
      publishedAt: "2022-10-13T02:59:29Z",
      channelId: "UC9lRfGMLA8tmoczC4jHaSNw",
      title:
        "I Return To This Anime Game&#39;s NEW UPDATE EVENT To Obtain The Most Ridiculous STRAW HAT LUFFY Power!",
      description:
        "Game: https://www.roblox.com/games/6938803436/Anime-Dimensions-Simulator Video: WTHHHHHHH? Social Media ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/J5KhGJ7qxow/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/J5KhGJ7qxow/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/J5KhGJ7qxow/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Kelvingts",
      liveBroadcastContent: "none",
      publishTime: "2022-10-13T02:59:29Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "7FExLWI7fmQ",
    },
    snippet: {
      publishedAt: "2022-10-12T12:00:06Z",
      channelId: "UCGHNgq4Wg8jP61T_WHUIAlw",
      title: "CLOSE LOOK – The New M 1000 R",
      description:
        "Enjoy every detail of living in the fast lane with the new BMW M R. Exceeding any expectations, it stands for M perfection.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/7FExLWI7fmQ/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/7FExLWI7fmQ/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/7FExLWI7fmQ/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "BMW Motorrad",
      liveBroadcastContent: "none",
      publishTime: "2022-10-12T12:00:06Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "hFRiK2PN9js",
    },
    snippet: {
      publishedAt: "2022-10-12T09:13:01Z",
      channelId: "UCe9lO5FQR2lLNBtzU0Swgvg",
      title:
        "New Entertainment Top Funny Video Best Comedy in 2022 Episode 99 By Fun Tv 24",
      description:
        "New Entertainment Top Funny Video Best Comedy in 2022 Episode 99 By Fun Tv 24 Must Watch Very Special Funny Video 2022 ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/hFRiK2PN9js/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/hFRiK2PN9js/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/hFRiK2PN9js/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Fun Tv 24",
      liveBroadcastContent: "none",
      publishTime: "2022-10-12T09:13:01Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "b0zIM_rc1Lc",
    },
    snippet: {
      publishedAt: "2022-10-12T22:00:13Z",
      channelId: "UCDjQjx4wkGv7aVWIxzl_D5w",
      title:
        "[MAHIKA] - Adie - New OPM Song 2022 Love 💦Top 1 chill OPM Trend -Zack Tabudlo,Moira ,Flow G,Janine",
      description:
        "[MAHIKA] - Adie - New OPM Song 2022 Love Top 1 chill OPM Trend -Zack Tabudlo,Moira ,Flow G,Janine Welcome To MuSic ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/b0zIM_rc1Lc/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/b0zIM_rc1Lc/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/b0zIM_rc1Lc/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "MuSic Hits",
      liveBroadcastContent: "none",
      publishTime: "2022-10-12T22:00:13Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "6hQ2F640jhQ",
    },
    snippet: {
      publishedAt: "2022-10-12T20:20:35Z",
      channelId: "UCOa14ep8GUxOkt89ZE_jDow",
      title: "ROBLOX *NEW* ESCAPE BACKROOMS MORPHS! (ALL NEW MORPHS UNLOCKED!)",
      description:
        'ROBLOX *NEW* ESCAPE BACKROOMS MORPHS! (ALL NEW MORPHS UNLOCKED!) ⭐ Use Star Code: "TUSSY" when ...',
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/6hQ2F640jhQ/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/6hQ2F640jhQ/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/6hQ2F640jhQ/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "TussyGames",
      liveBroadcastContent: "none",
      publishTime: "2022-10-12T20:20:35Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "mfcOf3Bc108",
    },
    snippet: {
      publishedAt: "2022-10-11T18:22:36Z",
      channelId: "UCNvzD7Z-g64bPXxGzaQaa4g",
      title: "10 Brand NEW Multiplayer Games Trying Something NEW",
      description:
        "Looking for an upcoming multiplayer game that feels a bit different? Here are some new games with different spins on familiar ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/mfcOf3Bc108/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/mfcOf3Bc108/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/mfcOf3Bc108/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "gameranx",
      liveBroadcastContent: "none",
      publishTime: "2022-10-11T18:22:36Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "3xREJvKzFkE",
    },
    snippet: {
      publishedAt: "2022-10-12T17:11:55Z",
      channelId: "UCDVYQ4Zhbm3S2dlz7P1GBDg",
      title: "Cincinnati Bengals vs. New Orleans Saints | 2022 Week 6 Preview",
      description:
        "Check out our other channels: NFL Tuesday Night Gaming https://www.youtube.com/c/NFLTNG NFL Mundo ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/3xREJvKzFkE/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/3xREJvKzFkE/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/3xREJvKzFkE/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "NFL",
      liveBroadcastContent: "none",
      publishTime: "2022-10-12T17:11:55Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "6p7Y5z93EA4",
    },
    snippet: {
      publishedAt: "2022-10-13T09:00:13Z",
      channelId: "UCqle5cwtPckB2N8sSQoynwg",
      title:
        "New Bangla Natok 2022 | Bhuture Prem | ভূতুড়ে প্রেম | Niloy Alamgir, Heme | Global TV Online",
      description:
        "You are watching New Bangla Natok: Bhuture Prem | ভূতুড়ে প্রেম Come & join Global TV Online channel to watch ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/6p7Y5z93EA4/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/6p7Y5z93EA4/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/6p7Y5z93EA4/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Global TV Online",
      liveBroadcastContent: "none",
      publishTime: "2022-10-13T09:00:13Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "cKqTy4VzW3A",
    },
    snippet: {
      publishedAt: "2022-10-13T13:40:23Z",
      channelId: "UCgz7Jeier5nCoHN9PpZjKXw",
      title:
        "Dua Zehra new updates | Zehra Kazmi | Arrest Zaheer | Mehdi Kazmi | Zehra Latest",
      description:
        "Breaking News: Dua Zehra new updates | Zehra Kazmi | Arrest Zaheer | Mehdi Kazmi | Zehra Latest Zehra Kazmi | Arrest Zaheer ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/cKqTy4VzW3A/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/cKqTy4VzW3A/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/cKqTy4VzW3A/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "MARIA ALI",
      liveBroadcastContent: "none",
      publishTime: "2022-10-13T13:40:23Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "_AtSzR_9hwc",
    },
    snippet: {
      publishedAt: "2022-10-12T21:00:12Z",
      channelId: "UCzORJV8l3FWY4cFO8ot-F2w",
      title: "[Vinesauce] Vinny - New York Comic Con 2022",
      description:
        "Check out my other youtube channel for full streams ▻ http://bit.ly/vinefullsauce Twitch ▻ http://twitch.tv/vinesauce Want a ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/_AtSzR_9hwc/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/_AtSzR_9hwc/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/_AtSzR_9hwc/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "vinesauce",
      liveBroadcastContent: "none",
      publishTime: "2022-10-12T21:00:12Z",
    },
  },
];
