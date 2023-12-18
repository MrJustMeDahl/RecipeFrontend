import Navbar from "./Navbar";
import "./About.css";

const About = () => {
    return (
        <>
        
        <Navbar />
        <div className="about">
        
        <h2 class="about-header">About Our Foodie Community</h2>
      <p class="about-welcome">Welcome to our delightful corner of the internet, where passion for food meets the joy of sharing! 🍲✨</p>

      <p>What sets us apart is the diverse tapestry of flavors woven by our community. Whether you're a seasoned chef experimenting with exotic cuisines or a novice looking for quick and easy recipes, you'll find a place among us. Explore a world of taste, discover new ingredients, and embark on a gastronomic adventure with every recipe you encounter.</p>

      <p class="about-join">Join our vibrant community to:</p>
      <ul class="about-li">
        <li>Share your favorite recipes and culinary creations.</li>
        <li>Explore a vast collection of recipes spanning various cuisines and skill levels.</li>
        <li>Learn from experienced chefs and passionate home cooks.</li>
        <li>Find inspiration for your next delicious meal.</li>
      </ul>

      <p class="about-end">Whether you're here to learn, share, or simply savor the delicious moments, this is your go-to destination for all things food. Let's cook, share, and savor the goodness together!</p>
        </div>
        </>
    );
}

export default About;