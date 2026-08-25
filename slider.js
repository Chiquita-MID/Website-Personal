jQuery(document).ready(function ($) {
    $(".slider-img").on("click", function (event) {
        // --- 1. STOP PROPAGATION (Prevent button clicks from collapsing the card) ---
        // This stops the click event from bubbling up if you clicked the button or text inside the expanded card.
        if ($(event.target).closest('.llm-button').length || $(event.target).closest('.details').length) {
            return;
        }

        // --- 2. THE COLLAPSE LOGIC (The fix you need) ---
        // Check if the card was already active (expanded) before we remove the class globally.
        const wasActive = $(this).hasClass("active"); 

        // Collapse All: Remove 'active' from ALL slider images.
        $(".slider-img").removeClass("active");

        // Conditional Toggle: ONLY re-add 'active' if it was NOT active initially.
        // If it was active (wasActive == true), this block is skipped, and it remains collapsed.
        if (!wasActive) {
            $(this).addClass("active");
        }
    });
});