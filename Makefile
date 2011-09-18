graph: www
online: commit push publish
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

