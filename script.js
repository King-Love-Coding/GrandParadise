        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Scroll to section function
        function scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }

        // Navbar background change on scroll
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(26, 26, 46, 0.98)';
            } else {
                navbar.style.background = 'rgba(26, 26, 46, 0.95)';
            }
        });

        // Fade in animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Booking form handling
        document.getElementById('bookingForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const checkin = document.getElementById('checkin').value;
            const checkout = document.getElementById('checkout').value;
            const guests = document.getElementById('guests').value;
            const rooms = document.getElementById('rooms').value;
            
            if (!checkin || !checkout) {
                alert('Please select both check-in and check-out dates.');
                return;
            }
            
            const checkinDate = new Date(checkin);
            const checkoutDate = new Date(checkout);
            
            if (checkinDate >= checkoutDate) {
                alert('Check-out date must be after check-in date.');
                return;
            }
            
            // Simulate booking search
            const searchBtn = document.querySelector('#bookingForm button[type="submit"]');
            const originalText = searchBtn.textContent;
            searchBtn.textContent = 'Searching...';
            searchBtn.disabled = true;
            
            setTimeout(() => {
                searchBtn.textContent = originalText;
                searchBtn.disabled = false;
                alert(`Great! We found available rooms for ${guests} guest(s) in ${rooms} room(s) from ${checkin} to ${checkout}. Redirecting to booking confirmation...`);
            }, 2000);
        });

        // Set minimum date for check-in to today
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('checkin').min = today;
        
        // Update check-out minimum date when check-in changes
        document.getElementById('checkin').addEventListener('change', function() {
            const checkinDate = new Date(this.value);
            const nextDay = new Date(checkinDate);
            nextDay.setDate(nextDay.getDate() + 1);
            document.getElementById('checkout').min = nextDay.toISOString().split('T')[0];
        });

        // Gallery item click effect
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1.05)';
                }, 100);
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 200);
            });
        });

        // Add hover effects to service cards
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.querySelector('.service-icon').style.transform = 'scale(1.2) rotate(5deg)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.querySelector('.service-icon').style.transform = 'scale(1) rotate(0deg)';
            });
        });

        