
        const { createApp } = Vue;

        createApp({
            data() {
                return {
                    isAlbumAnimated: false,
                    showToast: false,
                    toastMessage: '',
                    
                    bottomTabs: [
                        { 
                            icon: '♪', 
                            label: 'Home', 
                            bgColor: 'bg-red-400',
                            href: 'index.html',
                            target: '_self'
                        },
                        { 
                            icon: '⬇', 
                            label: 'Materiales 2026', 
                            bgColor: 'bg-blue-400',
                            href: 'materials.html',
                            target: '_self'
                        },
                        { 
                            icon: '🖼', 
                            label: 'Indicaciones', 
                            bgColor: 'bg-blue-400',
                            href: 'indicaciones.html',
                            target: '_self'
                        },
                        { 
                            icon: '□□', 
                            label: 'Plan Académico', 
                            bgColor: 'bg-gray-600',
                            href: 'plan.html',
                            target: '_self'
                        },
                        { 
                            icon: '★', 
                            label: 'Cronograma', 
                            bgColor: 'bg-yellow-500',
                            href: 'cronograma.html',
                            target: '_self'
                        }
                    ]
                }
            },
            methods: {
                toggleAlbumAnimation() {
                    this.isAlbumAnimated = !this.isAlbumAnimated;
                    setTimeout(() => this.isAlbumAnimated = false, 3000);
                },
                
                showToastMessage(message) {
                    this.toastMessage = message;
                    this.showToast = true;
                    setTimeout(() => this.showToast = false, 2500);
                }
            }
            
            
        }).mount('#app');
    
