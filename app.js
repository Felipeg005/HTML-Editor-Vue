Vue.createApp({
    data() {
      return {
        code: ''
      }
    },
    methods: {
      startResize() {
        window.addEventListener('mousemove', this.resize);
        document.querySelector('iframe').style.pointerEvents = 'none';
      },
      
      resize(e) {
        const resizeBox = document.querySelector('.text-container');
        const CodeContainer = document.querySelector('.live-code-container');
        resizeBox.style.width = e.pageX;
        CodeContainer.style.width = window.innerWidth - resizeBox.offsetWidth - 5;
      },
  
      stopResize() {
        window.removeEventListener('mousemove', this.resize);
        document.querySelector('iframe').style.pointerEvents = 'auto';
      },
  
      changeTheme() {
        const button = document.querySelector('#theme-button');
        if(button.innerHTML === 'Dark-mode') {
          button.innerHTML = 'Light-mode';
        } else if (button.innerHTML === 'Light-mode') {
          button.innerHTML = 'Dark-mode';
        }
        document.querySelector('.code-area').classList.toggle('dark-text-area');
        document.querySelector('.header-container').classList.toggle('dark-header-container');
        document.querySelector('.text-container').classList.toggle('dark-text-container');
        document.querySelector('.code-area').classList.toggle('dark-code-area');
        document.querySelector('.logo').classList.toggle('dark-logo');
        document.querySelector('.resizer').classList.toggle('dark-resizer');
      }
    },
  
    mounted() {
      const myTextarea = document.getElementById('code-area')
      CodeMirror.fromTextArea(myTextarea, {
        lineNumbers: true,
        mode:  "HTML"
      });
    },
  }).mount('#app')