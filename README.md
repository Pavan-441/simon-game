# Simon Game

## Overview

The **Simon Game** is a memory game that challenges players to remember and repeat a sequence of colors. The game starts with a single color being shown, and with each level, the sequence grows by one color. Players need to repeat the sequence by clicking the corresponding colored buttons. If a player makes a mistake, the game ends and prompts them to restart.

This version of Simon Game is developed using **Bootstrap** for styling and **vanilla JavaScript** for game logic.

## Features

- **Interactive Game**: Players follow a growing sequence of flashing colors.
- **Level Progression**: As you correctly repeat the sequence, the game advances to the next level.
- **Game Over**: If the sequence is wrong, a "Game Over" message appears, and you can restart the game.
- **Simple and Clean UI**: The game has a responsive design, with color buttons and a score display.
- **Responsive Design**: Built with **Bootstrap** for a smooth user experience across devices.

## Website Link

You can play the game live at the following link:

[**Simon Game**](https://simon-game-ten-wheat.vercel.app/)

## Technologies Used

- **Bootstrap**: For styling and responsive design.
- **JavaScript**: For the game logic and interactivity.
- **HTML/CSS**: For the basic structure and design of the web page.

## Project Structure

```
/simon-game
|-- /assets
|   |-- /styles.css        # Custom styles for the game
|   |-- /script.js         # JavaScript file that contains the game logic
|-- index.html             # The main HTML file for the Simon game
|-- README.md              # Project documentation
```

## Setup and Installation

### Prerequisites

Before running the project locally, ensure you have **Node.js** installed on your system. You will also need a web browser to view the game.

### Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/Pavan-441/Simon-Game.git
```

### Install Dependencies

Since this is a static project, there are no external dependencies, and you can open it directly in your browser.

### Running the Game Locally

1. Navigate to the project directory:

   ```bash
   cd Simon-Game
   ```

2. Open the `index.html` file in your browser to start playing.

### Build the Application (Optional)

If you'd like to build the app for production, you can use:

```bash
npm run build
```

This will create a production-ready version of your game.

## How to Play

1. **Start the Game**: Press any key or click to start the game.
2. **Watch the Sequence**: The game will flash a color in a sequence.
3. **Repeat the Sequence**: Click on the buttons in the same order to repeat the sequence.
4. **Level Up**: If you repeat the sequence correctly, the game will advance to the next level, with one additional color.
5. **Game Over**: If you make a mistake, a "Game Over" message will appear. Press any key to restart the game.

## Contributing

We welcome contributions to improve the game! To contribute:

1. Fork this repository.
2. Create a new branch for your changes.
3. Make the desired changes and commit them.
4. Push your changes to your fork.
5. Open a pull request to merge your changes back into the main repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
