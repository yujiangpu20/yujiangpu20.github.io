# Yujiang Pu — Academic Homepage

Source for [yujiangpu20.github.io](https://yujiangpu20.github.io), built with Jekyll and the [Minimal Light](https://github.com/yaoyao-liu/minimal-light) remote theme.

## Project structure

```text
.
├── _data/                  # Repeated content such as news and publications
├── _includes/sections/     # Homepage sections
├── _layouts/               # Page shell
├── _sass/                  # Theme styles
├── assets/
│   ├── css/                # Compiled and custom styles
│   ├── files/              # CV, papers, slides, and BibTeX files
│   ├── img/                # Profile, favicon, and publication images
│   └── js/                 # Small browser helpers
├── _config.yml            # Site metadata and Jekyll configuration
└── index.md               # Homepage composition
```

## Updating content

- Edit personal and site metadata in `_config.yml`.
- Edit the short homepage sections in `_includes/sections/`.
- Add news items to `_data/news.yml`.
- Add or update publication records in `_data/publications.yml`.
- Place downloadable material in `assets/files/` and images in `assets/img/`.

Generated files, editor history, caches, and machine-specific Bundler settings are intentionally excluded from version control.

## Local preview

The repository uses the Ruby version declared in `.ruby-version`.

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://127.0.0.1:4000>.

## Acknowledgements

The page uses Yao Yao Liu's [Minimal Light](https://github.com/yaoyao-liu/minimal-light) theme, which incorporates work from [pages-themes/minimal](https://github.com/pages-themes/minimal), [orderedlist/minimal](https://github.com/orderedlist/minimal), and [al-folio](https://github.com/alshedivat/al-folio).
