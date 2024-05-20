
# Reusable Dropdown Component

This project is a demonstration of a reusable dropdown component built using React.js and SCSS. The dropdown component supports basic functionality such as selecting items, searching/filtering options, and displaying icons alongside text.




## Features

- Reusable Component: Easily integrate the dropdown component into different parts of your React application.
- Basic Dropdown Functionality: Supports expanding and collapsing to display a list of items.
- Searchable Dropdown: Allows users to search and filter options based on both the label and value.
- Flexible Styling: Supports a dark theme with customizable styles using SCSS variables.
- Responsive Design: Adapts to varying widths based on its placement within the application's layout.
## Run Locally

Clone the project

```bash
  git clone https://github.com/ElegantFalcon/Reusable-Dropdown.git
```

Go to the project directory

```bash
  cd Reusable-Dropdown
```

Install dependencies

```bash
  npm i
```

Start the server

```bash
  npm run dev
```


## Components

The Dropdown component is the main component of this project. It accepts the following props:

- items: An array of objects representing the dropdown options.
- defaultSelectedValue: The default value of the selected item.
- placeholder: Placeholder text displayed when no item is selected.
- searchable: Boolean indicating whether the dropdown is searchable.
- upward: Boolean indicating whether the dropdown should expand upwards.
- showTick: Boolean indicating whether to display a tick mark on the selected item.
- onItemSelected: Callback function triggered when an item is selected.

