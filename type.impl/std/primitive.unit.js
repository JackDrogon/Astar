(function() {var type_impls = {
"astar_runtime":[["<section id=\"impl-IntoFunc%3CT,+(),+R%3E-for-F\" class=\"impl\"><a href=\"#impl-IntoFunc%3CT,+(),+R%3E-for-F\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, F, R&gt; IntoFunc&lt;T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, R&gt; for F<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>() -&gt; R + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,\n    R: WasmRet,</div></h3></section>","IntoFunc<T, (), R>","astar_runtime::Unreleased"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MultiUnzip%3C()%3E-for-IT\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/itertools/0.8/src/itertools/unziptuple.rs.html#68\">source</a><a href=\"#impl-MultiUnzip%3C()%3E-for-IT\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;IT&gt; <a class=\"trait\" href=\"https://docs.rs/itertools/0.8/itertools/unziptuple/trait.MultiUnzip.html\" title=\"trait itertools::unziptuple::MultiUnzip\">MultiUnzip</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>&gt; for IT<div class=\"where\">where\n    IT: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.multiunzip\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/itertools/0.8/src/itertools/unziptuple.rs.html#68\">source</a><a href=\"#method.multiunzip\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/itertools/0.8/itertools/unziptuple/trait.MultiUnzip.html#tymethod.multiunzip\" class=\"fn\">multiunzip</a>(self)</h4></section></summary><div class='docblock'>Unzip this iterator into multiple collections.</div></details></div></details>","MultiUnzip<()>","astar_runtime::Unreleased"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MultiUnzip%3C()%3E-for-IT\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/itertools/0.8/src/itertools/unziptuple.rs.html#68\">source</a><a href=\"#impl-MultiUnzip%3C()%3E-for-IT\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;IT&gt; <a class=\"trait\" href=\"https://docs.rs/itertools/0.8/itertools/unziptuple/trait.MultiUnzip.html\" title=\"trait itertools::unziptuple::MultiUnzip\">MultiUnzip</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>&gt; for IT<div class=\"where\">where\n    IT: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.multiunzip\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/itertools/0.8/src/itertools/unziptuple.rs.html#68\">source</a><a href=\"#method.multiunzip\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/itertools/0.8/itertools/unziptuple/trait.MultiUnzip.html#tymethod.multiunzip\" class=\"fn\">multiunzip</a>(self)</h4></section></summary><div class='docblock'>Unzip this iterator into multiple collections.</div></details></div></details>","MultiUnzip<()>","astar_runtime::Unreleased"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BuildStorage-for-()\" class=\"impl\"><a href=\"#impl-BuildStorage-for-()\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"astar_runtime/trait.BuildStorage.html\" title=\"trait astar_runtime::BuildStorage\">BuildStorage</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.assimilate_storage\" class=\"method trait-impl\"><a href=\"#method.assimilate_storage\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"astar_runtime/trait.BuildStorage.html#tymethod.assimilate_storage\" class=\"fn\">assimilate_storage</a>(&amp;self, _: &amp;mut Storage) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;</h4></section></summary><div class='docblock'>Assimilate the storage for this module into pre-existing overlays.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.build_storage\" class=\"method trait-impl\"><a href=\"#method.build_storage\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"astar_runtime/trait.BuildStorage.html#method.build_storage\" class=\"fn\">build_storage</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Storage, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;</h4></section></summary><div class='docblock'>Build the storage out of this builder.</div></details></div></details>","BuildStorage","astar_runtime::Unreleased"],["<section id=\"impl-IntoFunc%3CT,+(),+R%3E-for-F\" class=\"impl\"><a href=\"#impl-IntoFunc%3CT,+(),+R%3E-for-F\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, F, R&gt; IntoFunc&lt;T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, R&gt; for F<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>() -&gt; R + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,\n    R: WasmRet,</div></h3></section>","IntoFunc<T, (), R>","astar_runtime::Unreleased"]],
"local_runtime":[["<section id=\"impl-IntoFunc%3CT,+(),+R%3E-for-F\" class=\"impl\"><a href=\"#impl-IntoFunc%3CT,+(),+R%3E-for-F\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, F, R&gt; IntoFunc&lt;T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, R&gt; for F<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>() -&gt; R + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,\n    R: WasmRet,</div></h3></section>","IntoFunc<T, (), R>","local_runtime::Migrations"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MultiUnzip%3C()%3E-for-IT\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/itertools/0.8/src/itertools/unziptuple.rs.html#68\">source</a><a href=\"#impl-MultiUnzip%3C()%3E-for-IT\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;IT&gt; <a class=\"trait\" href=\"https://docs.rs/itertools/0.8/itertools/unziptuple/trait.MultiUnzip.html\" title=\"trait itertools::unziptuple::MultiUnzip\">MultiUnzip</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>&gt; for IT<div class=\"where\">where\n    IT: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.multiunzip\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/itertools/0.8/src/itertools/unziptuple.rs.html#68\">source</a><a href=\"#method.multiunzip\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/itertools/0.8/itertools/unziptuple/trait.MultiUnzip.html#tymethod.multiunzip\" class=\"fn\">multiunzip</a>(self)</h4></section></summary><div class='docblock'>Unzip this iterator into multiple collections.</div></details></div></details>","MultiUnzip<()>","local_runtime::Migrations"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MultiUnzip%3C()%3E-for-IT\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/itertools/0.8/src/itertools/unziptuple.rs.html#68\">source</a><a href=\"#impl-MultiUnzip%3C()%3E-for-IT\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;IT&gt; <a class=\"trait\" href=\"https://docs.rs/itertools/0.8/itertools/unziptuple/trait.MultiUnzip.html\" title=\"trait itertools::unziptuple::MultiUnzip\">MultiUnzip</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>&gt; for IT<div class=\"where\">where\n    IT: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.multiunzip\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/itertools/0.8/src/itertools/unziptuple.rs.html#68\">source</a><a href=\"#method.multiunzip\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/itertools/0.8/itertools/unziptuple/trait.MultiUnzip.html#tymethod.multiunzip\" class=\"fn\">multiunzip</a>(self)</h4></section></summary><div class='docblock'>Unzip this iterator into multiple collections.</div></details></div></details>","MultiUnzip<()>","local_runtime::Migrations"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BuildStorage-for-()\" class=\"impl\"><a href=\"#impl-BuildStorage-for-()\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"local_runtime/trait.BuildStorage.html\" title=\"trait local_runtime::BuildStorage\">BuildStorage</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.assimilate_storage\" class=\"method trait-impl\"><a href=\"#method.assimilate_storage\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"local_runtime/trait.BuildStorage.html#tymethod.assimilate_storage\" class=\"fn\">assimilate_storage</a>(&amp;self, _: &amp;mut Storage) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;</h4></section></summary><div class='docblock'>Assimilate the storage for this module into pre-existing overlays.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.build_storage\" class=\"method trait-impl\"><a href=\"#method.build_storage\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"local_runtime/trait.BuildStorage.html#method.build_storage\" class=\"fn\">build_storage</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Storage, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;</h4></section></summary><div class='docblock'>Build the storage out of this builder.</div></details></div></details>","BuildStorage","local_runtime::Migrations"],["<section id=\"impl-IntoFunc%3CT,+(),+R%3E-for-F\" class=\"impl\"><a href=\"#impl-IntoFunc%3CT,+(),+R%3E-for-F\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, F, R&gt; IntoFunc&lt;T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, R&gt; for F<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>() -&gt; R + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,\n    R: WasmRet,</div></h3></section>","IntoFunc<T, (), R>","local_runtime::Migrations"]],
"shiden_runtime":[["<section id=\"impl-IntoFunc%3CT,+(),+R%3E-for-F\" class=\"impl\"><a href=\"#impl-IntoFunc%3CT,+(),+R%3E-for-F\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, F, R&gt; IntoFunc&lt;T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, R&gt; for F<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>() -&gt; R + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,\n    R: WasmRet,</div></h3></section>","IntoFunc<T, (), R>","shiden_runtime::Unreleased"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MultiUnzip%3C()%3E-for-IT\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/itertools/0.8/src/itertools/unziptuple.rs.html#68\">source</a><a href=\"#impl-MultiUnzip%3C()%3E-for-IT\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;IT&gt; <a class=\"trait\" href=\"https://docs.rs/itertools/0.8/itertools/unziptuple/trait.MultiUnzip.html\" title=\"trait itertools::unziptuple::MultiUnzip\">MultiUnzip</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>&gt; for IT<div class=\"where\">where\n    IT: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.multiunzip\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/itertools/0.8/src/itertools/unziptuple.rs.html#68\">source</a><a href=\"#method.multiunzip\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/itertools/0.8/itertools/unziptuple/trait.MultiUnzip.html#tymethod.multiunzip\" class=\"fn\">multiunzip</a>(self)</h4></section></summary><div class='docblock'>Unzip this iterator into multiple collections.</div></details></div></details>","MultiUnzip<()>","shiden_runtime::Unreleased"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MultiUnzip%3C()%3E-for-IT\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/itertools/0.8/src/itertools/unziptuple.rs.html#68\">source</a><a href=\"#impl-MultiUnzip%3C()%3E-for-IT\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;IT&gt; <a class=\"trait\" href=\"https://docs.rs/itertools/0.8/itertools/unziptuple/trait.MultiUnzip.html\" title=\"trait itertools::unziptuple::MultiUnzip\">MultiUnzip</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>&gt; for IT<div class=\"where\">where\n    IT: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.multiunzip\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/itertools/0.8/src/itertools/unziptuple.rs.html#68\">source</a><a href=\"#method.multiunzip\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/itertools/0.8/itertools/unziptuple/trait.MultiUnzip.html#tymethod.multiunzip\" class=\"fn\">multiunzip</a>(self)</h4></section></summary><div class='docblock'>Unzip this iterator into multiple collections.</div></details></div></details>","MultiUnzip<()>","shiden_runtime::Unreleased"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BuildStorage-for-()\" class=\"impl\"><a href=\"#impl-BuildStorage-for-()\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"shiden_runtime/trait.BuildStorage.html\" title=\"trait shiden_runtime::BuildStorage\">BuildStorage</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.assimilate_storage\" class=\"method trait-impl\"><a href=\"#method.assimilate_storage\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"shiden_runtime/trait.BuildStorage.html#tymethod.assimilate_storage\" class=\"fn\">assimilate_storage</a>(&amp;self, _: &amp;mut Storage) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;</h4></section></summary><div class='docblock'>Assimilate the storage for this module into pre-existing overlays.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.build_storage\" class=\"method trait-impl\"><a href=\"#method.build_storage\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"shiden_runtime/trait.BuildStorage.html#method.build_storage\" class=\"fn\">build_storage</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Storage, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;</h4></section></summary><div class='docblock'>Build the storage out of this builder.</div></details></div></details>","BuildStorage","shiden_runtime::Unreleased"],["<section id=\"impl-IntoFunc%3CT,+(),+R%3E-for-F\" class=\"impl\"><a href=\"#impl-IntoFunc%3CT,+(),+R%3E-for-F\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, F, R&gt; IntoFunc&lt;T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, R&gt; for F<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>() -&gt; R + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,\n    R: WasmRet,</div></h3></section>","IntoFunc<T, (), R>","shiden_runtime::Unreleased"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()