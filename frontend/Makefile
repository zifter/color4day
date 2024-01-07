###########
# Site
setup:
	npm install

run:
	$(info Start site)
	cd color4life && yarn start

# Build image of site for
image-build: IMAGE_TAG := test
image-build:
	$(info Build image)
	podman build . -t zifter/color4life-site:$(IMAGE_TAG)

run-image: IMAGE_TAG := test
run-image:
	$(info Build image)
	podman run -p 3000:3000 -t zifter/color4life-site:$(IMAGE_TAG)

lint:
	npm run eslint

lint-fix:
	npm run eslint-fix

test:
	npm run test
