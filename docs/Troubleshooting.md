# Unsigned commits in latest are preventing me from pushing my branch

## Documentation index

Please familiarise yourself with our:

- [Code of conduct](https://github.com/bbc/simorgh/blob/latest/.github/CODE_OF_CONDUCT.md)
- [Coding Standards](https://github.com/bbc/simorgh/blob/latest/docs/Coding-Standards/README.md)
- [Contributing guidelines](https://github.com/bbc/simorgh/blob/latest/CONTRIBUTING.md)
- [Guide to Code Reviews](https://github.com/bbc/simorgh/blob/latest/docs/Code-Reviews.md)
- [Github Project Board Guide](https://github.com/bbc/simorgh/blob/latest/docs/Project-Board-Guide.md)
- [GPG Signing Guide](docs/GPG-Signing-Guide.md)
- [Primary README](https://github.com/bbc/simorgh/blob/latest/README.md)
- [Recommended Tools](https://github.com/bbc/simorgh/blob/latest/docs/Recommended-Tools.md)
- [Troubleshooting](https://github.com/bbc/simorgh/blob/latest/docs/Troubleshooting.md) (you are here)

If for some reason unsigned commits have been merged into the latest branch, possibly because of an admin merge, then you will need to sign any previously unsigned commits.

## How to Sign Previous Commits

The following instructions were taken from [here](https://hyperledger-indy.readthedocs.io/projects/sdk/en/latest/docs/contributors/signing-commits.html).

1. Use `git log --show-signature` to see which commits need to be signed.
2. Go into interactive rebase mode using `git rebase -i HEAD~X` where `X` is the number of commits up to the most current commit you would like to see.
3. You will see a list of the commits in a text file. On the line after each commit you need to sign, add `exec git commit --amend --no-edit -s` with the lowercase `-s` adding a text signature in the commit body.

   Example that signs both commits:

   ```
   pick 12345 some commit message
   exec git commit --amend --no-edit -s
   pick 67890 another commit message
   exec git commit --amend --no-edit -s
   ```
