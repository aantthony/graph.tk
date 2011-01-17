graph: www
distribution: commit push publish
www:
	@chmod +x ./scripts/compile.sh
	@./scripts/compile.sh
commit:
	@git commit -a -m "Upload to http://graph.tk/"
	@true
push:
	@git push
	@true
publish:
	@./scripts/publish.sh

