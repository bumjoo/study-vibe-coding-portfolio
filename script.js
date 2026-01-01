// 스크롤 애니메이션 효과
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 패널에 페이드인 효과 추가
document.addEventListener('DOMContentLoaded', () => {
    const panels = document.querySelectorAll('.panel');
    
    panels.forEach((panel, index) => {
        panel.style.opacity = '0';
        panel.style.transform = 'translateY(20px)';
        panel.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(panel);
    });
    
    // 초기 로드 시 첫 번째 패널은 즉시 표시
    if (panels[0]) {
        setTimeout(() => {
            panels[0].style.opacity = '1';
            panels[0].style.transform = 'translateY(0)';
        }, 100);
    }
});

// 그라디언트 배경 인터랙션
document.addEventListener('mousemove', (e) => {
    const gradientBackgrounds = document.querySelectorAll('.gradient-background');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    gradientBackgrounds.forEach(bg => {
        const rect = bg.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        bg.style.transform = `scale(1.2) translate(${(x - 0.5) * 20}px, ${(y - 0.5) * 20}px)`;
    });
});

// 부드러운 스크롤 (모바일에서도 작동)
let isScrolling = false;

window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            // 스크롤 이벤트 처리
            isScrolling = false;
        });
        isScrolling = true;
    }
}, { passive: true });

// 터치 이벤트 최적화 (모바일)
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        // 스와이프 감지 (필요시 추가 기능 구현)
    }
}

// 리사이즈 이벤트 최적화
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // 리사이즈 후 처리
        const panels = document.querySelectorAll('.panel');
        panels.forEach(panel => {
            observer.observe(panel);
        });
    }, 250);
}, { passive: true });

