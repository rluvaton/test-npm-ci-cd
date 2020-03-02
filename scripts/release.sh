

function validateCleanGit() {
  echo ${$1}
  git diff-index --quiet HEAD
}

validateCleanGit
# npm run pre:release && npm run all-test && npm run compile && git add dist/ && npm version
