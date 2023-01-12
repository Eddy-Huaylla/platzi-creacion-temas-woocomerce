<?php

get_header();
if (have_posts()) {
	while (have_posts()) {
		the_post();
		?>

		<div class="container">
			<div class="row pt-5">
				<div class="col-12 col-md-6">
					<h1><?= the_title(); ?></h1>
					<?= the_content(); ?>
				</div>
				<div class="col-12 col-md-6">
					<?= the_post_thumbnail("large"); ?>
				</div>
			</div>
		</div>

		<?php
	}
}

get_footer();

?>
