document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenuIcon = document.getElementById('mobile-menu-icon');

    // Search elements
    const searchToggle = document.getElementById('mobile-search-toggle');
    const searchBox = document.getElementById('mobile-search-box');
    let isSearchVisible = false;

    // Menu active state elements
    const menuItems = document.querySelectorAll('.md\\:flex > a, .md\\:flex > div');

    // Function to close mobile menu
    const closeMobileMenu = () => {
        mobileMenu.classList.add('translate-x-full');
        mobileMenu.classList.remove('-translate-x-0');
        mobileMenuOverlay.classList.add('invisible');
        mobileMenuOverlay.classList.remove('visible');
        mobileMenuOverlay.classList.add('opacity-0');
        mobileMenuOverlay.classList.remove('opacity-50');
        mobileMenuIcon.innerHTML = '<i class="ri-menu-line text-2xl"></i>';
    };

    // Function to open mobile menu
    const openMobileMenu = () => {
        mobileMenu.classList.remove('translate-x-full');
        mobileMenu.classList.add('-translate-x-0');
        mobileMenuOverlay.classList.remove('invisible');
        mobileMenuOverlay.classList.add('visible');
        mobileMenuOverlay.classList.remove('opacity-0');
        mobileMenuOverlay.classList.add('opacity-50');
        mobileMenuIcon.innerHTML = '<i class="ri-close-line text-2xl"></i>';
    };

    // Mobile menu event listeners
    mobileMenuToggle.addEventListener('click', openMobileMenu);
    mobileMenuClose.addEventListener('click', closeMobileMenu);
    mobileMenuOverlay.addEventListener('click', closeMobileMenu);

    // Mobile dropdown toggles
    const mobileDropdownTriggers = document.querySelectorAll('#mobile-menu .group > div');
    mobileDropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            // Find the dropdown content that's a sibling of the clicked trigger
            const dropdownContent = trigger.nextElementSibling;
            const arrow = trigger.querySelector('svg');
            
            // Toggle the arrow rotation and dropdown visibility
            arrow.classList.toggle('rotate-180');
            dropdownContent.classList.toggle('hidden');

            // Close other open dropdowns
            mobileDropdownTriggers.forEach(otherTrigger => {
                if (otherTrigger !== trigger) {
                    const otherDropdown = otherTrigger.nextElementSibling;
                    const otherArrow = otherTrigger.querySelector('svg');
                    if (otherDropdown && !otherDropdown.classList.contains('hidden')) {
                        otherDropdown.classList.add('hidden');
                        otherArrow.classList.remove('rotate-180');
                    }
                }
            });
        });
    });
    
    // Search functionality
    searchToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        isSearchVisible = !isSearchVisible;
        searchBox.classList.toggle('hidden');
        
        if (isSearchVisible) {
            searchBox.querySelector('input').focus();
        }
    });

    // Close search when clicking outside
    document.addEventListener('click', (e) => {
        if (isSearchVisible && !searchBox.contains(e.target) && e.target !== searchToggle) {
            searchBox.classList.add('hidden');
            isSearchVisible = false;
        }
    });

    // Prevent search box from closing when clicking inside it
    searchBox.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const marqueeContent = document.getElementById('marqueeContent');

    function createLogoMarquee(logos, config) {
        // Clear existing logos
        marqueeContent.innerHTML = '';
        
        // Create two sets of logos to ensure continuous marquee
        const fullLogoSet = [...logos, ...logos];

        fullLogoSet.forEach(logo => {
            const logoWrapper = document.createElement('div');
            logoWrapper.className = `flex-shrink-0 flex items-center justify-center`;
            logoWrapper.style.width = `${config.width}px`;
            logoWrapper.style.height = `${config.height}px`;
            logoWrapper.style.marginRight = `${config.gap}px`;

            const logoLink = document.createElement('a');
            logoLink.href = logo.url;
            logoLink.target = '_blank';
            logoLink.rel = 'noopener noreferrer';
            logoLink.className = 'block w-full h-full flex items-center justify-center';

            const logoImg = document.createElement('img');
            logoImg.src = logo.logo;
            logoImg.alt = logo.name;
            logoImg.className = 'max-h-full max-w-full object-contain';

            logoLink.appendChild(logoImg);
            logoWrapper.appendChild(logoLink);
            marqueeContent.appendChild(logoWrapper);
        });

        // Update marquee animation
        marqueeContent.style.animationDuration = `${config.animationSpeed}s`;
    }

    // Initial logo load
    createLogoMarquee(clientLogos, logoConfig);
});


document.addEventListener("DOMContentLoaded", () => {
    // Function to animate counters
    function animateCounter(elementId, target, duration) {
        const element = document.getElementById(elementId);
        let start = 0;
        const step = Math.ceil(target / (duration / 16)); // Adjust for ~16ms per frame

        const updateCounter = () => {
            start += step;
            if (start >= target) {
                element.innerHTML = `${target}<i class="ri-add-line"></i>`; // Add icon along with number
            } else {
                element.innerHTML = `${start}<i class="ri-add-line"></i>`;
                requestAnimationFrame(updateCounter);
            }
        };

        requestAnimationFrame(updateCounter);
    }

    // Start the counters when the page is fully loaded
    animateCounter("counter1", 1500, 2000); // Happy Clients
    animateCounter("counter2", 1200, 2000); // Projects Completed
    animateCounter("counter3", 3000, 2000); // Cups of Coffee
    animateCounter("counter4", 25, 2000);   // Awards Won
});



// Get elements
const playIconWrapper = document.getElementById('playIconWrapper');
const videoModal = document.getElementById('videoModal');
const closeModal = document.getElementById('closeModal');
const videoIframe = document.getElementById('videoIframe');

// Open modal and start autoplay
playIconWrapper.addEventListener('click', () => {
    videoModal.classList.remove('hidden'); // Show modal
    videoIframe.src = videoIframe.src + "?autoplay=1"; // Add autoplay to the video URL
});

// Close modal and stop autoplay
closeModal.addEventListener('click', () => {
    videoModal.classList.add('hidden'); // Hide modal
    videoIframe.src = videoIframe.src.replace("?autoplay=1", ""); // Remove autoplay from the URL to stop the video
});

// Close modal when clicking outside the modal content
videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        videoModal.classList.add('hidden'); // Hide modal
        videoIframe.src = videoIframe.src.replace("?autoplay=1", ""); // Remove autoplay to stop the video
    }
});



// Back to Top Button
document.addEventListener('DOMContentLoaded', () => {
    const backToTop = document.getElementById('backToTop');

    // Show button when scrolling down
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    // Smooth scroll to top when clicked
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
