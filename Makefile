FILES = dist/js/vendor.js dist/js/main.js dist/css/vendor.css dist/css/app.css
IMGS = $(wildcard img/*)
VENDORJS = vendor/require/require.js vendor/jquery/jquery.min.js \
			vendor/bootstrap/js/bootstrap.min.js vendor/underscore.min.js \
			vendor/json2.js vendor/backbone.min.js
			
VENDORCSS = vendor/bootstrap/css/bootstrap.min.css vendor/todc-bootstrap.css

.PHONY: build clean

build: $(FILES) dist/img dist/index.html

$(FILES): | dist

dist:
	mkdir -p dist/{js,css}

dist/img: $(IMGS)
	mkdir -p dist/img
	-cp -rf img/* dist/img/ 2>/dev/null || true
	touch dist/img

dist/index.html: index.html
	cp index.html dist/index.html

dist/js/vendor.js: $(VENDORJS)
	cat $(VENDORJS) > dist/js/vendor.js

dist/js/main.js: $(shell find js)
	cd js && node ../vendor/require/r.js -o app.build.js

dist/css/vendor.css: $(VENDORCSS)
	cat $(VENDORCSS) > dist/css/vendor.css
	
dist/css/app.css: sass/*.sass
	compass compile -e production --force .
	cp css/app.css dist/css/app.css

clean:
	rm -rf dist/
