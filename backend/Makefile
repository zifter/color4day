run:
	cd src && npm start

build-image: IMAGE_TAG := test
build-image:
	$(info Build image)
	podman build . -t zifter/color4life-backend:$(IMAGE_TAG)

run-image: IMAGE_TAG := test
run-image:
	$(info Build image)
	podman run -p 3000:3000 -it --init -t zifter/color4life-backend:$(IMAGE_TAG)
