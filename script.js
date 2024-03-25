document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');

// Function to load movie listings
function loadMovieListings() {
    // Updated movie data without descriptions, directors, and years
    const movies = [
        { title: 'One Fine Day', imageUrl: "C:/Users/esraf/OneDrive/Masa%C3%BCst%C3%BC/proje/onefineday.jpg" },
        { title: 'Jane Eyre', imageUrl: "C:/Users/esraf/OneDrive/Masa%C3%BCst%C3%BC/proje/janeeyre.jpg" },
        { title: 'Zodiac', imageUrl: "C:/Users/esraf/OneDrive/Masa%C3%BCst%C3%BC/proje/zodiac.jpg" },
        { title: 'Little Women', imageUrl: "C:/Users/esraf/OneDrive/Masa%C3%BCst%C3%BC/proje/littlewomen.jpg" },
        { title: 'The Classic', imageUrl: "C:/Users/esraf/OneDrive/Masa%C3%BCst%C3%BC/proje/theclassic.jpg" },
        { title: 'The Batman', imageUrl: "C:/Users/esraf/OneDrive/Masa%C3%BCst%C3%BC/proje/the%20batman.jpg" },
        { title: 'Far From Madding Crowd', imageUrl: "C:/Users/esraf/OneDrive/Masa%C3%BCst%C3%BC/proje/far%20from%20maddening%20crowd.jpg" },
        { title: 'The Sixth Sense', imageUrl: "C:/Users/esraf/OneDrive/Masa%C3%BCst%C3%BC/proje/the%20sixth%20sense.jpg" },
        { title: 'Mulan', imageUrl: "C:/Users/esraf/OneDrive/Masa%C3%BCst%C3%BC/proje/mulan.jpg" },
        { title: 'Only You', imageUrl: "C:/Users/esraf/OneDrive/Masa%C3%BCst%C3%BC/proje/only%20you.jpg" },
        { title: "Ocean's Eleven", imageUrl: "C:/Users/esraf/OneDrive/Masa%C3%BCst%C3%BC/proje/ocean's%20eleven.jpg" },
        { title: 'Contact', imageUrl: "C:/Users/esraf/OneDrive/Masa%C3%BCst%C3%BC/proje/contact.jpg" },
        // Add more movie data here...
    ];

    // Update DOM with movie listings
    container.innerHTML = ''; // Clear existing content
    movies.forEach(movie => {
        container.innerHTML += `
            <div class="movie">
                <h2>${movie.title}</h2>
                <img src="${movie.imageUrl}" alt="${movie.title} Poster" width="360" height="360">
                <a href="#" class="view-details" data-title="${movie.title}">View Details</a>
            </div>
        `;
    });

    // Attach event listeners to view details links
    const viewDetailLinks = document.querySelectorAll('.view-details');
    viewDetailLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const title = this.getAttribute('data-title');
            loadMovieDetails(title);
        });
    });
}


    // Function to load movie details
function loadMovieDetails(title) {
    const movies = [
        { title: 'One Fine Day', director: 'Michael Hoffman', year: 1996, description: "In this romantic comedy, two single parents find themselves unexpectedly thrown together when their hectic schedules collide, leading to a whirlwind day of adventures and unexpected romance." },
        { title: 'Jane Eyre', director: 'Cary Joji Fukunaga', year: 2011, description: "Based on Charlotte Brontë's classic novel, this atmospheric adaptation follows the journey of the independent and resilient Jane Eyre as she navigates love, loss, and the search for belonging in 19th-century England." },
        { title: 'Zodiac', director: 'David Fincher', year: 2007, description: "A gripping mystery thriller based on real events, Zodiac chronicles the hunt for the notorious Zodiac Killer who terrorized the San Francisco Bay Area in the late 1960s and early 1970s, weaving together intricate investigations and personal obsessions." },
        { title: 'Little Women', director: 'Greta Gerwig', year: 2019, description: "Greta Gerwig's heartfelt adaptation of Louisa May Alcott's beloved novel follows the March sisters—Jo, Meg, Beth, and Amy—as they navigate the challenges of adolescence, sisterhood, and societal expectations against the backdrop of the American Civil War era." },
        { title: 'The Classic', director: 'Kwak Jaeyong', year: 2003, description: "A timeless romance that spans decades, The Classic tells the story of two love stories intertwined—one in the present day and the other set in the 1960s." },
        { title: 'The Batman', director: 'Matt Reeves', year: 2022, description: "In this dark and gritty reboot of the iconic superhero franchise, Batman faces off against his most formidable foes as he seeks to protect Gotham City from corruption and chaos." },
        { title: 'Far From Madding Crowd', director: 'Thomas Vinterberg', year: 2015, description: "Based on Thomas Hardy's classic novel, this sweeping period drama follows the independent and headstrong Bathsheba Everdene as she navigates love and heartbreak amidst the beauty of rural England." },
        { title: 'The Sixth Sense', director: 'M. Night Shyamalan', year: 1999, description: "A psychological thriller with a supernatural twist, The Sixth Sense follows child psychologist Malcolm Crowe as he tries to help a young boy who claims to see ghosts, uncovering dark secrets along the way." },
        { title: 'Mulan', director: 'Tony Bancroft, Barry Cook', year: 1998, description: "Disney's animated classic Mulan tells the inspiring tale of a young woman who disguises herself as a man to take her father's place in the army and defend China against invading forces." },
        { title: 'Only You', director: 'Norman Jewison', year: 1994, description: "A charming romantic comedy, Only You follows a young woman who travels to Italy in search of her soulmate, guided by a mysterious fortune teller's prediction." },
        { title: "Ocean's Eleven", director: "Steven Soderbergh", year: 2001, description: "A stylish heist film, Ocean's Eleven follows a charismatic thief who assembles a team of skilled criminals to pull off an elaborate casino robbery in Las Vegas." },
        { title: 'Contact', director: 'Robert Zemeckis', year: 1997, description: "Based on the novel by Carl Sagan, Contact explores humanity's quest for extraterrestrial life as scientist Ellie Arroway makes contact with an alien intelligence, sparking a journey of discovery and existential questions." },
        // Add more movie data here...
    ];

    // Find the movie details from the array
    const movie = movies.find(movie => movie.title === title);

    // Update DOM with movie details
    container.innerHTML = `
        <div class="movie-details">
            <h2>${movie.title}</h2>
            <p><strong>Director:</strong> ${movie.director}</p>
            <p><strong>Year:</strong> ${movie.year}</p>
            <p><strong>Description:</strong> ${movie.description}</p>
            <a href="#" class="back-to-list">Back to Movie List</a>
        </div>
    `;

    // Attach event listener to back to list link
    const backToListLink = document.querySelector('.back-to-list');
    backToListLink.addEventListener('click', function(event) {
        event.preventDefault();
        loadMovieListings();
    });
}


    // Function to retrieve director based on movie title
    function getDirector(title) {
        // Here, you could implement logic to retrieve director based on movie title
        // For now, we're returning a placeholder value
        return 'Director';
    }

    // Function to retrieve year based on movie title
    function getYear(title) {
        // Here, you could implement logic to retrieve year based on movie title
        // For now, we're returning a placeholder value
        return 'Year';
    }

    // Initial load of movie listings
    loadMovieListings();
});
