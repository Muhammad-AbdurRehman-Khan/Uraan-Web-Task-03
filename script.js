/**
 * Red Card 2018 - Interactive Controller
 * Handles screen switching, view modes, and form submission
 */

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const screen1View = document.getElementById('screen-1-view');
    const screen2View = document.getElementById('screen-2-view');
    const tabScreen1 = document.getElementById('tab-screen-1');
    const tabScreen2 = document.getElementById('tab-screen-2');
    const screenWrapper = document.getElementById('screen-wrapper');
    const viewFrameBtn = document.getElementById('toggle-frame-btn');

    // Nominee Data for Dynamic/Mockup switch
    const mockupData = [
        { name1: 'Lorem ipsum', name2: 'Lorem', img: 'images/1.png', alt: 'Borussia Dortmund' },
        { name1: 'Lorem ipsum', name2: 'Lorem', img: 'images/1.png', alt: 'Borussia Dortmund' },
        { name1: 'Lorem ipsum', name2: 'Lorem', img: 'images/1.png', alt: 'Borussia Dortmund' },
        { name1: 'Lorem ipsum', name2: 'Lorem', img: 'images/1.png', alt: 'Borussia Dortmund' },
        { name1: 'Lorem ipsum', name2: 'Lorem', img: 'images/1.png', alt: 'Borussia Dortmund' }
    ];

    const authenticData = {
        clubs: [
            { name1: 'Borussia Dortmund', name2: 'Germany', img: 'images/1.png', alt: 'Borussia Dortmund' },
            { name1: 'Chelsea FC', name2: 'England', img: 'images/3.png', alt: 'Chelsea FC' },
            { name1: 'Paris Saint-Germain', name2: 'France', img: 'images/4.png', alt: 'Paris Saint-Germain' },
            { name1: 'Arsenal FC', name2: 'England', img: 'images/5.png', alt: 'Arsenal FC' },
            { name1: 'Borussia Dortmund', name2: 'Bundesliga', img: 'images/1.png', alt: 'Borussia Dortmund' }
        ],
        leagues: [
            { name1: 'Bundesliga', name2: 'DFL Germany', img: 'images/2.png', alt: 'Bundesliga' },
            { name1: 'Premier League', name2: 'UK Football', img: 'images/premier.png', alt: 'Premier League' },
            { name1: 'Bundesliga', name2: 'China Tour', img: 'images/2.png', alt: 'Bundesliga' },
            { name1: 'Premier League', name2: 'Asia Trophy', img: 'images/premier.png', alt: 'Premier League' },
            { name1: 'Bundesliga', name2: 'Official Broadcast', img: 'images/2.png', alt: 'Bundesliga' }
        ],
        players: [
            { name1: 'Cristiano Ronaldo', name2: 'Juventus / Real', img: 'images/ronaldo.png', alt: 'Cristiano Ronaldo' },
            { name1: 'CR7 Digital Hub', name2: 'Weibo MVP', img: 'images/ronaldo.png', alt: 'Cristiano Ronaldo' },
            { name1: 'Cristiano Ronaldo', name2: 'Global Brand', img: 'images/ronaldo.png', alt: 'Cristiano Ronaldo' },
            { name1: 'CR7 China Tour', name2: 'Live Fan Event', img: 'images/ronaldo.png', alt: 'Cristiano Ronaldo' },
            { name1: 'Cristiano Ronaldo', name2: 'Top Player 2018', img: 'images/ronaldo.png', alt: 'Cristiano Ronaldo' }
        ]
    };

    /**
     * Switch between Screen 1 (Submission) and Screen 2 (Awards)
     */
    function switchScreen(screenNum) {
        if (screenNum === 1) {
            if (screen1View) screen1View.style.display = 'block';
            if (screen2View) screen2View.style.display = 'none';
            if (tabScreen1) tabScreen1.classList.add('active');
            if (tabScreen2) tabScreen2.classList.remove('active');
            if (screenWrapper) screenWrapper.classList.remove('mobile-frame-view');
            window.location.hash = 'screen1';
        } else {
            if (screen1View) screen1View.style.display = 'none';
            if (screen2View) screen2View.style.display = 'block';
            if (tabScreen1) tabScreen1.classList.remove('active');
            if (tabScreen2) tabScreen2.classList.add('active');
            window.location.hash = 'screen2';
        }
    }

    if (tabScreen1) {
        tabScreen1.addEventListener('click', (e) => {
            e.preventDefault();
            switchScreen(1);
        });
    }

    if (tabScreen2) {
        tabScreen2.addEventListener('click', (e) => {
            e.preventDefault();
            switchScreen(2);
        });
    }

    // Check URL hash on load & on hashchange
    function handleHash() {
        if (window.location.hash === '#screen1') {
            switchScreen(1);
        } else if (window.location.hash === '#screen2') {
            switchScreen(2);
        }
    }

    handleHash();
    window.addEventListener('hashchange', handleHash);

    // Toggle Mobile Frame View for Screen 2
    if (viewFrameBtn && screenWrapper) {
        viewFrameBtn.addEventListener('click', () => {
            screenWrapper.classList.toggle('mobile-frame-view');
            const isFramed = screenWrapper.classList.contains('mobile-frame-view');
            viewFrameBtn.textContent = isFramed ? '🖥️ Full Responsive View' : '📱 Mobile Mockup Frame (460px)';
        });
    }

    // Screen 1: Submission Form handling
    const submissionForm = document.getElementById('award-submission-form');
    const successBadge = document.getElementById('success-badge');

    if (submissionForm) {
        submissionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Validate that at least one award checkbox is checked
            const checkedBoxes = submissionForm.querySelectorAll('input[name="awards[]"]:checked');
            if (checkedBoxes.length === 0) {
                alert('Please select at least one award category before submitting.');
                return;
            }

            // Animate and display success badge
            if (successBadge) {
                successBadge.style.display = 'inline-flex';
                successBadge.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                successBadge.style.animation = 'squarePulse 0.5s ease';
            }
        });
    }

    // Screen 2: Mode Toggle (Mockup Mode vs Authentic Nominees Mode)
    const btnMockupMode = document.getElementById('btn-mockup-mode');
    const btnAuthenticMode = document.getElementById('btn-authentic-mode');
    const clubGrids = document.querySelectorAll('.club-cards-grid');

    function renderMockupMode() {
        clubGrids.forEach(grid => {
            grid.innerHTML = mockupData.map(item => `
                <div class="club-card-item">
                    <div class="club-badge-wrapper">
                        <img src="${item.img}" alt="${item.alt}">
                    </div>
                    <div class="club-name-primary">${item.name1}</div>
                    <div class="club-name-secondary">${item.name2}</div>
                </div>
            `).join('');
        });
    }

    function renderAuthenticMode() {
        if (clubGrids.length >= 5) {
            // Category 1: Best Clubs
            renderGrid(clubGrids[0], authenticData.clubs);
            // Category 2: Best Leagues
            renderGrid(clubGrids[1], authenticData.leagues);
            // Category 3: Best Players
            renderGrid(clubGrids[2], authenticData.players);
            // Category 4: Best Digital Campaigns
            renderGrid(clubGrids[3], authenticData.clubs);
            // Category 5: Best Sponsor Activations
            renderGrid(clubGrids[4], authenticData.leagues);
        }
    }

    function renderGrid(container, items) {
        container.innerHTML = items.map(item => `
            <div class="club-card-item">
                <div class="club-badge-wrapper">
                    <img src="${item.img}" alt="${item.alt}">
                </div>
                <div class="club-name-primary">${item.name1}</div>
                <div class="club-name-secondary">${item.name2}</div>
            </div>
        `).join('');
    }

    if (btnMockupMode && btnAuthenticMode) {
        btnMockupMode.addEventListener('click', () => {
            btnMockupMode.classList.add('active');
            btnAuthenticMode.classList.remove('active');
            renderMockupMode();
        });

        btnAuthenticMode.addEventListener('click', () => {
            btnAuthenticMode.classList.add('active');
            btnMockupMode.classList.remove('active');
            renderAuthenticMode();
        });
    }
});
