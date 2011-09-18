graph: clean www
online: clean commit push publish
clean:
	@./make/clean.sh
www:
	@./make/compile.sh
commit:
	@git commit -a -m "Upload to http://graph.tk/"
	@true
push:
	@git push
	@true
publish:
	@./make/publish.sh

