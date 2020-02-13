var CustomEase = (function () {
    function CustomEase(_name, segments) {
        this._name = _name;
        this._segments = [];
        for(var i = 0; i < segments.length; i++) {
            this._segments[this._segments.length] = new Segment(segments[i].s, segments[i].cp, segments[i].e);
        }
        CustomEase._all[_name] = this;
    }
    CustomEase._all = {
    };
    CustomEase.create = function create(name, segments) {
        var b = new CustomEase(name, segments);
        return b.ease.bind(b);
    };
    CustomEase.byName = function byName(name) {
        return CustomEase._all[name].ease;
    };
    CustomEase.prototype.ease = function (time, start, change, duration) {
        var factor = time / duration, qty = this._segments.length, i = Math.floor(qty * factor), t, s;
        t = (factor - (i * (1 / qty))) * qty;
        s = this._segments[i];
        return start + change * (s.s + t * (2 * (1 - t) * (s.cp - s.s) + t * (s.e - s.s)));
    };
    CustomEase.prototype.destroy = function () {
        this._segments = null;
        delete CustomEase._all[this._name];
    };
    return CustomEase;
})();
var Segment = (function () {
    function Segment(s, cp, e) {
        this.s = s;
        this.cp = cp;
        this.e = e;
    }
    return Segment;
})();
