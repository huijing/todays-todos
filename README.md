# Today's to-dos

A tragically not-very-persistent to-do list. Because I just wanted one.

## Local development

1. Clone this repo to your local computer:

```shell
$git clone git@github.com:huijing/todays-todos.git
```

2. Install the necessary packages for this repo:

```shell
$ bun install
```

3. Run **Gulp** to concatenate and compile files:

```shell
$ gulp
```

- Global gulp command line utility is required via `npm install --global gulp-cli`
- Styles go in the `styles.scss` file, and will be compiled by Gulp
- Scripts go into the js folder, and will be concatenated by Gulp
