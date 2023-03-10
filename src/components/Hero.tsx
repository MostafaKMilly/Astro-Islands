import { createSignal } from "solid-js";

function Hero() {
  const [isLoggedIn, setIsLoggedIn] = createSignal(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  return (
    <div class="hero" style="padding: 3rem;">
      <div
        class="hero-content"
        style="background-color: #fff; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); margin-top: -4rem; z-index: 1;"
      >
        <div style="display : flex; column-gap:20px; margin-top : 8px">
          <img
            src="./hero.svg"
            alt="Hero image"
            style="max-width: 200px; height: auto; border-radius: 8px;"
          />
          <div>
            <h1 style="font-size: 3rem; margin-bottom: 1rem;">
              Welcome to our website
            </h1>
            <p style="font-size: 1.5rem; margin-bottom: 2rem;">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            {!isLoggedIn() && (
              <button
                onClick={handleLogin}
                style="background-color: #007bff; color: #fff; padding: 1rem 2rem; border: none; border-radius: 4px; font-size: 1.2rem; cursor: pointer;"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
