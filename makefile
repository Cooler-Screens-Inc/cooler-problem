run:
	npx concurrently "make -C api" "make -C ui"