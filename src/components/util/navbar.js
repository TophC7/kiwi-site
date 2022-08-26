export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-main-color">
      <div class="container-fluid">
        <div class="spin kiwi-logo">🥝</div>
        <a class="navbar-brand" href="/kiwi.html">
          Kiwis
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/index.html">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="/info.html">
                Info
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/pictures.html">
                Pictures
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about.html">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
