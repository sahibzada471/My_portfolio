// welcome page sections
           document.addEventListener('DOMContentLoaded', function() {
  const welcomePage = document.getElementById('welcomePage');
  const enterButton = document.getElementById('enterButton');
  const portfolioContent = document.getElementById('portfolioContent');
  const body = document.body;

  // Optional: Auto-close after 5 seconds (comment if not needed)
  const autoCloseTimer = setTimeout(function() {
    closeWelcomePage();
  }, 5000);

  enterButton.addEventListener('click', function() {
    clearTimeout(autoCloseTimer); // Clear the auto-close timer if button is clicked
    closeWelcomePage();
  });

  function closeWelcomePage() {
    // Hide welcome page
    welcomePage.classList.add('hidden');
    
    // Remove welcome-active class to restore scrolling
    body.classList.remove('welcome-active');
    
    // Show portfolio content after a delay to allow animation to complete
    setTimeout(function() {
      portfolioContent.classList.add('active');
    }, 500);
  }
});
  


// Portfolio sections
const products = {
  todo: {
    title: "To-Do List App",
    image: "assets/img/todo.jpg",
    description: "A fully responsive to-do list application with drag-and-drop functionality, task categorization, and local storage persistence. Users can create, edit, and organize tasks with due dates and priority levels.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Local Storage API", "Drag & Drop API"],
    liveLink: "#",
    codeLink: "#"
  },
  bag: {
    title: "E-Commerce Bag Store",
    image: "assets/img/bag.jpg",
    description: "An e-commerce platform specializing in designer bags with product filtering, shopping cart functionality, and secure checkout process. Features include product zoom, color selection, and wishlist capabilities.",
    technologies: ["Flutter", "PHP", "Node.js", "MongoDB", "Stripe API"],
    liveLink: "#",
    codeLink: "#"
  },
  books: {
    title: "Online Bookstore",
    image: "assets/img/books.jpg",
    description: "A digital bookstore with search functionality, book previews, and user reviews. Includes features like recommendation engine, reading progress tracking, and eBook download options.",
    technologies: ["flutter", "Firebase", "Google Books API", "PHP", "MYSQL"],
    liveLink: "#",
    codeLink: "#"
  },
  food: {
    title: "Food Delivery App",
    image: "assets/img/food.jpg",
    description: "A mobile-first food delivery application with real-time order tracking, restaurant filtering, and in-app chat support. Includes features like scheduled deliveries and dietary preference filters.",
    technologies: ["Flutter", "PHP", "Node.js", "MongoDB", "Google Maps API"],
    liveLink: "#",
    codeLink: "#"
  },
  short: {
    title: "Short Video App",
    image: "assets/img/short.jpg",
    description: "A short-form video platform with swipeable feed, video editing tools, and social sharing features. Includes user profiles, comments, and engagement analytics.",
    technologies: ["Flutter", "Firebase", "FFmpeg", "AWS S3", "WebRTC"],
    liveLink: "#",
    codeLink: "#"
  },
  music: {
    title: "Music Streaming Platform",
    image: "assets/img/Music.jpg",
    description: "A music streaming service with personalized playlists, offline listening, and cross-device synchronization. Features include lyrics display, audio quality settings, and artist radio.",
    technologies: ["Flutter", "Next j's", "PostgreSQL", "AWS", "Web Audio API"],
    liveLink: "#",
    codeLink: "#"
  }
};

// Modal functions
function openModal(productId) {
  const product = products[productId];
  const modal = document.getElementById('productModal');
  
  document.getElementById('modalImage').src = product.image;
  document.getElementById('modalTitle').textContent = product.title;
  document.getElementById('modalDescription').textContent = product.description;
  
  const techList = document.getElementById('modalTechList');
  techList.innerHTML = '';
  product.technologies.forEach(tech => {
    const li = document.createElement('li');
    li.textContent = tech;
    techList.appendChild(li);
  });
  
  document.getElementById('modalLiveLink').href = product.liveLink;
  document.getElementById('modalCodeLink').href = product.codeLink;
  
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('productModal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside content
window.onclick = function(event) {
  const modal = document.getElementById('productModal');
  if (event.target == modal) {
    closeModal();
  }
}

// Close modal with ESC key
document.onkeydown = function(event) {
  const modal = document.getElementById('productModal');
  if (event.key === "Escape" && modal.style.display === 'block') {
    closeModal();
  }
}