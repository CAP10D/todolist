# Todo List Application

A beautiful, responsive todo list application built with HTML, CSS, and JavaScript. Features a modern glassmorphism design with local storage functionality to persist your tasks.

## Features

- ✨ **Modern UI Design** - Glassmorphism effect with gradient background
- 📱 **Responsive Layout** - Works on desktop and mobile devices
- ✅ **Task Management** - Add, complete, and delete tasks
- 💾 **Local Storage** - Your tasks persist between browser sessions
- 🎨 **Smooth Animations** - Hover effects and transitions
- 🔄 **Toggle Completion** - Click the circle icon to mark tasks as complete

## Demo

The application features:
- Clean, minimalist interface
- Gradient blue-purple background
- Semi-transparent container with blur effect
- Interactive icons for task completion and deletion

## Technologies Used

- **HTML5** - Structure and semantics
- **CSS3** - Styling with modern features (backdrop-filter, gradients)
- **JavaScript (ES6)** - Functionality and local storage
- **Remix Icon** - Beautiful icons for UI elements

## File Structure

```
todo-app/
│
├── index.html          # Main HTML file
├── style.css           # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## Installation & Setup

1. **Clone or download** the project files
2. **No installation required** - This is a client-side application
3. **Open `index.html`** in your web browser
4. **Start managing your tasks!**

## Usage

### Adding Tasks
1. Type your task in the input field
2. Click the "Add" button or press Enter
3. Your task will appear in the list below

### Completing Tasks
- Click the circle icon (○) next to a task to mark it as complete
- The icon will change to a filled circle (●) when completed
- Click again to toggle back to incomplete

### Deleting Tasks
- Click the × icon on the right side of any task to delete it
- The task will be permanently removed from your list

### Data Persistence
- All tasks are automatically saved to your browser's local storage
- Your tasks will remain even after closing and reopening the browser
- Data is specific to each browser and device

## Code Overview

### HTML Structure
- Semantic HTML with proper form handling
- Uses Remix Icon CDN for scalable vector icons
- Clean, accessible markup

### CSS Features
- **Glassmorphism Design**: Semi-transparent containers with backdrop blur
- **Gradient Background**: Beautiful blue to purple gradient
- **Flexbox Layout**: Responsive and centered design
- **Smooth Transitions**: Hover effects and animations
- **Custom Scrollbar**: Styled scrollable task list

### JavaScript Functionality
- **Event Delegation**: Efficient event handling for dynamic content
- **Local Storage API**: Persistent data storage
- **DOM Manipulation**: Dynamic task creation and removal
- **Form Validation**: Prevents empty task submission

## Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

**Note**: The backdrop-filter property used for the glassmorphism effect may have limited support in older browsers.

## Customization

### Colors
You can easily customize the color scheme by modifying the CSS variables:

```css
/* Change gradient background */
background: linear-gradient(#your-color-1, #your-color-2);

/* Modify button color */
background: #your-button-color;
```

### Styling
- Modify container dimensions in `.container` class
- Adjust transparency values in `rgba()` functions
- Change border-radius values for different corner styles

## Local Storage Details

The application uses the browser's localStorage to save your tasks:
- **Storage Key**: `data`
- **Storage Format**: HTML string of the task list
- **Automatic Save**: Triggers on add, complete, or delete actions

## Known Issues

- Tasks with HTML content may cause display issues
- Local storage has size limitations (typically 5-10MB)
- Data is not synced across different browsers or devices

## Future Enhancements

Potential features to add:
- [ ] Task categories or tags
- [ ] Due dates and reminders
- [ ] Search and filter functionality
- [ ] Export/import tasks
- [ ] Cloud synchronization
- [ ] Dark/light theme toggle
- [ ] Task priority levels

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions:
1. Check the browser console for error messages
2. Ensure JavaScript is enabled in your browser
3. Try clearing your browser cache and local storage

---

**Enjoy organizing your tasks!** 📝✨