graph: www
www: clean compile
online: www commit push publish
clean:
	@./make/clean.sh
compile:
	@./make/compile.sh
commit:
	@git commit -a -m "Upload to http://graph.tk/"
	@true
push:
	@git push
	@true
publish:
	@./make/publish.sh

