new Vue({
    el: '#app',
    data: () => ({
        languages: [
          { title: 'English' },
          { title: 'española' },
        ],
        currencies: [
            { title: 'Dollar' },
            { title: 'Euro' },
          ],
        drawer: null,
        sideLinks: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ],
        right: null
      }),
      
 })