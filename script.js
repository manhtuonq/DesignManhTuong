document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile navigation toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            // Toggle icon
            const icon = menuToggle.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times'); // 'x' icon
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close nav when clicking outside on mobile (optional, but good UX)
        document.addEventListener('click', (e) => {
            if (!mainNav.contains(e.target) && !menuToggle.contains(e.target) && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    }

    // Basic "Add to Cart" functionality (for demonstration)
    const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
    const cartCountSpan = document.querySelector('.cart-count');
    let cartItemCount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartItemCount++;
            if (cartCountSpan) {
                cartCountSpan.textContent = cartItemCount;
            }
            alert('Sản phẩm đã được thêm vào giỏ hàng! (Chức năng này cần backend để hoạt động đầy đủ)');
        });
    });

    // Simple search box functionality (for demonstration)
    const searchInput = document.querySelector('.search-box input');
    const searchButton = document.querySelector('.search-box button');

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', () => {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                alert(`Bạn đã tìm kiếm: "${searchTerm}". (Chức năng này cần backend để hoạt động đầy đủ)`);
                // In a real application, you'd redirect to a search results page
                // window.location.href = `search.html?q=${encodeURIComponent(searchTerm)}`;
            } else {
                alert('Vui lòng nhập từ khóa tìm kiếm.');
            }
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });
    }

});