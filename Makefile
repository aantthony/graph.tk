graph: www
distribution: commit push publsh
www:
	@chmod +x ./scripts/compile.sh
	@./scripts/compile.sh
commit:
	@git commit -a -m "Upload to http://graph.tk/"
push:
	@git push
publish:
	@./scripts/publish.sh

