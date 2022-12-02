export const blogModule = {
  state: () => ({
    posts: [
      {
        img: 'https://via.placeholder.com/1196x776',
        type: 'Design',
        title: 'Why you should Always First',
        date: 'AUGUST 14, 2016',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus orci a purus lacinia consectetur.'
      },
      {
        img: 'https://via.placeholder.com/1196x776',
        type: 'Design',
        title: 'Why you should Always First',
        date: 'AUGUST 14, 2016',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus orci a purus lacinia consectetur.'
      },
      {
        img: 'https://via.placeholder.com/1196x776',
        type: 'Design',
        title: 'Why you should Always First',
        date: 'AUGUST 14, 2016',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus orci a purus lacinia consectetur.'
      },
      {
        img: 'https://via.placeholder.com/1196x776',
        type: 'Design',
        title: 'Why you should Always First',
        date: 'AUGUST 14, 2016',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus orci a purus lacinia consectetur.'
      },
      {
        img: 'https://via.placeholder.com/1196x776',
        type: 'Design',
        title: 'Why you should Always First',
        date: 'AUGUST 14, 2016',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus orci a purus lacinia consectetur.'
      },
      {
        img: 'https://via.placeholder.com/1196x776',
        type: 'Design',
        title: 'Why you should Always First',
        date: 'AUGUST 14, 2016',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus orci a purus lacinia consectetur.'
      }
    ]
  }),
  getters: {
    getPosts (state) {
      return state.posts
    }
  },
  mutations: {},
  actions: {}
}
