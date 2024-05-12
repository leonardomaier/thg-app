# How to run

If you have Docker installed, you just need to run the command below in the root folder:

```bash
docker-compose -f docker-compose.yml up --build
```
Otherwise, you're gonna need to install the dependencies and run the local server manually by executing:

```bash
npm install
npm start
```
Finally access `http://localhost:4200`

# Notes

## User Interface

To organize the Dashboard page, I divided it into two parts: the side menu and the main content area where the chart appears.

The side menu has three parts:

- `menu.component.ts`
- `menu-item.component.ts`
- `user-profile.component.ts`

The `menu-item.component.ts` is part of the Menu component, making it easy to add new menu items later.

I also made a component named `user-profile.component.ts`. It's used in the menu, but it's not considered a subcomponent because it could show the logged-in user in different parts of the app, like the top right corner.

I also created components for the charts:

- `line-chart.component.ts`
- `pie-chart.component.ts`

Both charts start with preset configurations. We only need to provide the data in this format:

```ts
{ labels: [], datasets: [] }: ChartData
```

Lastly, in the `app/pages` folder, we have the only page available:

- `dashboard.component.ts`

This is where the app contacts the API to fetch data for both charts. The `data.service.ts` file contains methods for consuming the API to retrieve all metrics.

Due to time constraints, I chose not to prioritize writing tests or implementing linting tools and similar tasks. However, we can discuss these further in a meeting. My aim was to keep things as simple as possible and fulfill the requirements outlined in the document.
