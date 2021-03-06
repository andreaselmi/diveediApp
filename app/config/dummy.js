export const groups = [
  {
    id: '1',
    owner: 'Mario',
    subscriptionOffered: 'NowTv',
    avatar: require('../assets/avatar/mario.jpg'),
    total: 2,
    available: 1,
  },
  {
    id: '2',
    owner: 'Alice',
    subscriptionOffered: 'Netflix',
    avatar: require('../assets/avatar/alice.jpg'),
    total: 6,
    available: 5,
  },
  {
    id: ' 3',
    owner: 'Giulia',
    subscriptionOffered: 'Spotify',
    avatar: require('../assets/avatar/giulia.jpg'),
    total: 5,
    available: 1,
  },
  {
    id: '4',
    owner: 'Federica',
    subscriptionOffered: 'Disney+',
    avatar: require('../assets/avatar/federica.jpg'),
    total: 7,
    available: 1,
  },
  {
    id: '5',
    owner: 'Enrico',
    subscriptionOffered: 'Netflix',
    avatar: require('../assets/avatar/enrico.jpg'),
    total: 5,
    available: 4,
  },
  {
    id: '6',
    owner: 'Artur',
    subscriptionOffered: 'AmazonPrime',
    avatar: require('../assets/avatar/artur.jpg'),
    total: 3,
    available: null,
  },
  {
    id: '7',
    owner: 'John',
    subscriptionOffered: 'Spotify',
    avatar: require('../assets/avatar/john.jpg'),
    total: 5,
    available: 3,
  },
  {
    id: '8',
    owner: 'Alessandro',
    subscriptionOffered: 'Hulu',
    avatar: require('../assets/avatar/alessandro.jpg'),
    total: 5,
    available: 3,
  },
];

export const news = [
  {
    id: '1',
    title: 'NowTV arriva su Diveedi',
    date: '16.03.2021',
    image: require('../assets/news/nowtv.png'),
  },
  {
    id: '2',
    title: 'Disney+ si aggiorna con Star',
    // date: '19.02.2021',
    image: require('../assets/news/disneystar.jpeg'),
  },
  {
    id: '3',
    title: 'Condividi il tuo abbonamento in palestra',
    date: '01.02.2021',
    image: require('../assets/news/gym.jpeg'),
  },
  {
    id: '4',
    title: 'Diveedi2.0 - Nuovo aggiornamento disponibile',
    date: '30.01.2021',
    image: require('../assets/news/update.jpeg'),
  },
];

export const sections = [
  {
    id: '1',
    name: 'Netflix',
    icon: require('../assets/logos/netflix.png'),
    latestReleases: [
      {
        id: '01',
        cover: require('../assets/covers/animalifantastici.jpeg'),
        title: 'Animali fantastici: I crimini di Grindelwald',
        releaseDate: '14 marzo',
      },
      {
        id: '02',
        cover: require('../assets/covers/batman.jpeg'),
        title: 'Batman Begins',
        releaseDate: '16 marzo',
      },
      {
        id: '03',
        cover: require('../assets/covers/iosonoleggenda.jpg'),
        title: 'Io sono Leggenda',
        releaseDate: '20 marzo',
      },
      {
        id: '04',
        cover: require('../assets/covers/philomena.jpeg'),
        title: 'Philomena',
        releaseDate: '27 marzo',
      },
      {
        id: '5',
        cover: require('../assets/covers/yesday.jpeg'),
        title: 'YES DAY',
        releaseDate: '29 marzo',
      },
    ],
    backgroundColor: '#2A2A2A',
    textColor: '#FFFFFF',
  },
  {
    id: '2',
    name: 'NowTV',
    icon: require('../assets/logos/nowtv.png'),
    latestReleases: [
      {
        id: '01',
        cover: require('../assets/covers/detectivepikachu.jpeg'),
        title: 'Detective Pikachu',
        releaseDate: '04 marzo',
      },
      {
        id: '02',
        cover: require('../assets/covers/frozen2.jpeg'),
        title: 'Frozen 2',
        releaseDate: '05 marzo',
      },
      {
        id: '03',
        cover: require('../assets/covers/justiceleague.jpeg'),
        title: "Zack Snyder's Justice League",
        releaseDate: '10 marzo',
      },
      {
        id: '04',
        cover: require('../assets/covers/spiderman.jpeg'),
        title: 'Spiderman : Far From Home',
        releaseDate: '11 marzo',
      },
      {
        id: '5',
        cover: require('../assets/covers/twd.jpeg'),
        title: 'The Walking Dead : Stagione 10',
        releaseDate: '20 marzo',
      },
    ],
    backgroundColor: '#FEB000',
    textColor: '#FFFFFF',
  },
  {
    id: '3',
    name: 'Disney+',
    icon: require('../assets/logos/disney+.png'),
    latestReleases: [
      {
        id: '01',
        cover: require('../assets/covers/bighero.jpeg'),
        title: 'Big Hero 6: terza stagione',
        releaseDate: '02 marzo',
      },
      {
        id: '02',
        cover: require('../assets/covers/falconwinter.jpeg'),
        title: 'The Falcon and The Winter Soldier',
        releaseDate: '7 marzo',
      },
      {
        id: '03',
        cover: require('../assets/covers/garfield.jpeg'),
        title: 'Garfield 2',
        releaseDate: '19 marzo',
      },
      {
        id: '04',
        cover: require('../assets/covers/raya.jpeg'),
        title: 'Raya and the Last Dragon',
        releaseDate: '22 marzo',
      },
      {
        id: '5',
        cover: require('../assets/covers/wandavision.jpeg'),
        title: 'Wandavision',
        releaseDate: '30 marzo',
      },
    ],
    backgroundColor: '#4a62d8',
    textColor: '#FFFFFF',
  },
];

export const movements = {
  previous: [
    {
      id: '1',
      serviceName: 'Netflix',
      date: '20.12.2020',
      image: require('../assets/logos/netflix.png'),
      cost: '5.00',
      transferType: 'accredit',
    },
    {
      id: '2',
      serviceName: 'Disney+',
      date: '15.12.2020',
      image: require('../assets/logos/disney+.png'),
      cost: '6.00',
      transferType: 'debit',
    },
    {
      id: '3',
      serviceName: 'Spotify',
      date: '08.12.2020',
      image: require('../assets/logos/spotify.png'),
      cost: '4.50',
      transferType: 'debit',
    },
    {
      id: '4',
      serviceName: 'Netflix',
      date: '20.11.2020',
      image: require('../assets/logos/netflix.png'),
      cost: '5.00',
      transferType: 'accredit',
    },
    {
      id: '5',
      serviceName: 'Disney+',
      date: '15.11.2020',
      image: require('../assets/logos/disney+.png'),
      cost: '6.00',
      transferType: 'debit',
    },
    {
      id: '6',
      serviceName: 'Spotify',
      date: '08.11.2020',
      image: require('../assets/logos/spotify.png'),
      cost: '4.50',
      transferType: 'debit',
    },
    {
      id: '7',
      serviceName: 'Netflix',
      date: '20.10.2020',
      image: require('../assets/logos/netflix.png'),
      cost: '5.00',
      transferType: 'accredit',
    },
  ],
  next: [
    {
      id: '1',
      serviceName: 'Spotify',
      date: '08.01.2021',
      image: require('../assets/logos/spotify.png'),
      cost: '6.00',
      transferType: 'accredit',
    },
    {
      id: '2',
      serviceName: 'Disney+',
      date: '15.12.2021',
      image: require('../assets/logos/disney+.png'),
      cost: '3.00',
      transferType: 'accredit',
    },
  ],
};

export const activePlans = {
  debit: [
    {
      id: '1',
      name: 'Disney+',
      cost: '6.00',
      activationDate: '15.08.2020',
      logo: require('../assets/logos/disney+.png'),
      viewStyle: {
        backgroundColor: '#4a62d8',
        textColor: '#FFFFFF',
      },
    },
    {
      id: '2',
      name: 'Spotify',
      cost: '4.50',
      activationDate: '08.08.2020',
      logo: require('../assets/logos/spotify.png'),
      viewStyle: {
        backgroundColor: '#191414',
        textColor: '#FFFFFF',
      },
    },
    {
      id: '3',
      name: 'NowTV',
      cost: '7.50',
      activationDate: '30.06.2020',
      logo: require('../assets/logos/nowtv.png'),
      viewStyle: {
        backgroundColor: '#FEB000',
        textColor: '#000000',
      },
    },
  ],
  accredit: [
    {
      id: '1',
      name: 'Netflix',
      cost: '5.00',
      activationDate: '20.09.2020',
      logo: require('../assets/logos/netflix.png'),
      viewStyle: {
        backgroundColor: '#2A2A2A',
        textColor: '#FFFFFF',
      },
    },
  ],
};
