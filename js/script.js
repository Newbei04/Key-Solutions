const websiteData = {
    // About Us Section Data
    aboutUs: {
        description: "Key Solutions is a leading technology partner dedicated to transforming businesses through innovative digital solutions. With over 15 years of experience, we've helped hundreds of organizations across various industries achieve their digital transformation goals.",
        stats: [
            { number: "3", label: "Major Continets" },
            { number: "16+", label: "Countries Deployed" },
        ]
    },

    // Solutions Section Data
    solutions: [
        {
            icon: "bi-key-fill",
            title: "Pin Generation",
            client: "Zain Kuwait",
            description: "Automated, random, and secure PIN createion for prepaid scratch cards with anti-collision logic.",
            features: ["Unique and random", "Batch Control and Audit", "Role-Based Security"],
        },
        {
            icon: "bi-lock-fill",
            title: "PIN Encryption",
            client: "Smart Communications",
            description: "End-to-end encryption and decryption engine ensuring secure PIN transport and 2FA security.",
            features: ["Automated Encryption", "Secure Decryption", "Authentication Engine"]
        },
        {
            icon: "bi-wallet-fill",
            title: "E-wallet and E-loading",
            client: "16 countries",
            description: "Comprehensive digital wallet platform with agent networks, deployed in 16 countries.",
            features: ["Comprehensive E-Wallet", "E-loading Engine", "Agent and Merchant Network"]
        },
        {
            icon: "bi-ticket-perforated-fill",
            title: "Scratch and Match",
            client: "7-Eleven",
            description: "Gamified promotional systems with secure validation logic and real-time winner verification.",
            features: ["Anti-Fraud Security", "Fairness Logic", "Campaign Analytics"]
        },
        {
            icon: "bi-star-fill",
            title: "Loyalty System",
            client: "I-Foods Group",
            description: "Multi-brand rewards program integrating POS, mobile apps, and CRM for customer retention.",
            features: ["Dynamic Tier Management", "Real-time POS integration", "Customer Analytics"]
        },
        {
            icon: "bi-hdd-stack-fill",
            title: "Triple A System",
            description: "Robust Authentication, Authorization, and Accounting framework for telecom environments.",
            features: ["Multi-method Verification", "Policy Enforcement", "Usage Metering"]
        },
        {
            icon: "bi-heart-pulse-fill",
            title: "Indigent Medical Cards",
            client: "Aklan Provincial Government",
            description: "Healthcare beneficiary tracking system with allocation management for government aid.",
            features: ["Hospital Integration", "On-site Issuance", "Digital Financial Services"]
        },
        {
            icon: "bi-person-vcard-fill",
            title: "Multi-Purpose LGU cards",
            client: "City of Makati and City of Manila",
            description: "Citizen ID system combining biometrics, payments, and access to city services. ",
            features: ["KYC & Biometrics", "Secure On-site Issuance", "Financial Inclusion"]
        },
        {
            icon: "bi-geo-alt-fill",
            title: "GPS Tracking System",
            client: "I-Foods Group",
            description: "Real-time fleet and asset monitoring with geofencing, history playback, and alerts.",
            features: ["Total Visibility", "Route Playback and Analysis", "Maintenance Scheduling"]
        }
    ],

    // Why Choose Us Section Data
    whyChooseUs: [
        {
            title: "Security by Design",
            description: "End-to-end encryption, biometric integration, and banking-grade security standards."
        },
        {
            title: "Proven Scale",
            description: "Handling millions of transactions daily accross 16 countries and major telco networks."
        },
        {
            title: "Rapid Deployment",
            description: "Modular architecture allows fast implementation and seamless legacy integration."
        }
    ],

    // Contact Information
    contact: {
        email: "inquiry@keysolutionsph.com",
        phone: "",
        address: "Pasig City, Metro Manila, Philippines"
    }
};


// Generate About Section
function generateAbout() {
    document.getElementById('aboutDescription').textContent = websiteData.aboutUs.description;
    
    const statsContainer = document.getElementById('statsContainer');
    statsContainer.innerHTML = websiteData.aboutUs.stats.map(stat => `
        <div class="col-md-6 col-lg-3">
            <div class="stat-card">
                <div class="stat-number">${stat.number}</div>
                <div class="stat-label">${stat.label}</div>
            </div>
        </div>
    `).join('');
}

// Generate Solutions Section
function generateSolutions() {
    const solutionsContainer = document.getElementById('solutionsContainer');
    solutionsContainer.innerHTML = websiteData.solutions.map(solution => `
        <div class="col-md-6 col-lg-4">
            <div class="solution-card">
                <div class="solution-header inline">
                    <div class="solution-icon">
                        <i class="bi ${solution.icon}"></i>
                    </div>
                    <h3 class="solution-title">${solution.title}</h3>
                </div>

                ${solution.client ? `<span class="solution-client">${solution.client}</span>` : ''}
                <p class="solution-description">${solution.description}</p>
                <ul class="solution-features">
                    ${solution.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}


// Generate Why Choose Us Section
function generateWhyChooseUs() {
    const whyContainer = document.getElementById('whyContainer');
    whyContainer.innerHTML = websiteData.whyChooseUs.map((reason, index) => `
        <div class="col-md-6 col-lg-4">
            <div class="why-card">
                <div class="why-number">${String(index + 1).padStart(2, '0')}</div>
                <h3 class="why-title">${reason.title}</h3>
                <p class="why-description">${reason.description}</p>
            </div>
        </div>
    `).join('');
}

// Generate Contact Section
function generateContact() {
    const data = websiteData.contact;
    document.getElementById('contactInfo').innerHTML = `
        <div class="contact-item">
            <div class="contact-icon">
                <i class="bi bi-envelope"></i>
            </div>
            <div>
                <div class="contact-label">Email</div>
                <a href="mailto:${data.email}" class="contact-value">${data.email}</a>
            </div>
        </div>
        <!--
        <div class="contact-item">
            <div class="contact-icon">
                <i class="bi bi-telephone"></i>
            </div>
            <div>
                <div class="contact-label">Phone</div>
                <a href="tel:${data.phone}" class="contact-value">${data.phone}</a>
            </div>
        </div>
        -->
        <div class="contact-item">
            <div class="contact-icon">
                <i class="bi bi-geo-alt"></i>
            </div>
            <div>
                <div class="contact-label">Address</div>
                <div class="contact-value">${data.address}</div>
            </div>
        </div>
    `;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Generate all sections
    generateAbout();
    generateSolutions();
    generateWhyChooseUs();
    generateContact();

    // Handle form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Close mobile menu on link click
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });
});

// Add parallax effect to background
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    document.body.style.backgroundPosition = `${50 + mouseX * 5}% ${50 + mouseY * 5}%`;
});