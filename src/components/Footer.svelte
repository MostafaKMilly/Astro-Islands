<footer class="footer">
  <nav class="footer__nav">
    <a href="#" class="footer__link">Home</a>
    <a href="#" class="footer__link">About</a>
    <a href="#" class="footer__link">Contact</a>
  </nav>
  <p class="footer__text">&copy; 2023 Astro Islands. All rights reserved.</p>
</footer>

<style>
  .footer {
    background-color: #f8f8f8;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer__nav {
    display: flex;
    gap: 20px;
    margin-bottom: 10px;
  }

  .footer__link {
    color: #333;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem;
    transition: color 0.2s ease-in-out;
  }

  .footer__link:hover {
    color: #007bff;
  }

  .footer__text {
    font-size: 0.9rem;
    color: #333;
    margin-top: 10px;
  }
</style>
